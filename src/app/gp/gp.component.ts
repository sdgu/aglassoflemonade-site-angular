import
{
    Component,
    OnInit,
    Directive,
    trigger,
    state,
    style,
    transition,
    animate
}
from '@angular/core';
import
{
    ColorPickerService
}
from "ngx-color-picker";

import
{
    SafeHtmlPipe
}
from "../safe-html.pipe";

// import { FocusDirective } from "../focus.directive";

@Component(
{
    selector: 'app-gp',
    templateUrl: './gp.component.html',
    styleUrls: ['./gp.component.css']
    // animations: [
    //   trigger("slideInOut", [
    //     state("in", style(
    //     {
    //       transform: "translate3d(0,0,0)"
    //     })),
    //     state("out", style(
    //     {
    //       transform: "translate3D(0, 100%, 0)"
    //     })),
    //     transition("in => out", animate("400ms ease-in-out")),
    //     transition("out => in", animate("400ms ease-in-out"))
    //     ]),
    //   ]

})




export class GpComponent implements OnInit
{

    constructor()
    {}

    processedTextToggle: boolean;
    processedTextClicked: boolean;

    showBB: boolean;
    // inputText: string;
    inputText: string; // = "this is a test string \nthis is a test string this is a test string ";
    inputTextArray: string[];
    // inputTextArray = this.inputText.split(" ");
    outputTextBB: string;
    textArrayBB: string[];

    // addColor = "#3055b0";
    // removeColor = "#FFB7B7";
    // commentColor = "#96D196";

    addColor = "#0000ff";
    removeColor = "#ff0000";
    commentColor = "#00ff00";

    redRemove = "<strong style='color:red;'><del>";
    closeRemove = "</del></strong>";


    blueAdd = "<strong style='color:blue;'>";
    closeStrong = "</strong>";

    openComment = "[c]";
    closeComment = "[/c]";

    openComRe = "\\[c\\]";
    closeComRe = "\\[\\/c\\]";

    BBRemove = "\[color='red'\]\[b\][s]";
    BBRemoveClose = "\[\/s\]\[\/b\]\[\/color\]"

    BBAdd = "\[color='blue'\]\[b\]";
    BBClose = "\[\/b\]\[\/color\]";
    BBCom = "[color='green'][b]";

    BBRemoveRegex = "\\[color=\\'red\\'\\]\\[b\\]\\[s\\]";
    BBRemoveCloseRegex = "\\[\\/s\\]\\[\\/b\\]\\[\\/color\\]"


    BBAddRegex = "\\[color=\\'blue\\'\\]\\[b\\]";
    BBCloseRegex = "\\[\\/b\\]\\[\\/color\\]";
    BBComRe = "\\[color=\\'green\\'\\]\\[b\\]";

    selectedWordIndex: number;


    inputCookie = "inputText";
    inputArrayCookie = "inputArrayCookie";
    cookieCounter: number;

    // processState:string = "out";

    confStr =
        `Are you sure you want to start a new check? This will delete cookies (D:) and you will lose progress on the current check. (Note: this actually uses local storage, not cookies).`

    processText(): void
    {
        // this.processState = this.processState === "out" ? "in" : "out";

        if (confirm(this.confStr))
        {
            localStorage.clear();
            // need to change \n to <br> and then back
            this.inputText = this.inputText.replace(/\n/g, " <br> ");


            this.inputTextArray = this.inputText.split(" ");
            this.textArrayBB = this.inputTextArray;
            this.outputTextBB = this.inputTextArray.join(" ");
            this.processedTextToggle = true;
            this.processedTextClicked = true;

            localStorage.setItem(this.inputCookie, this.inputText);
            this.processCookie();
        }



    }


    randomJoinString = "\!\@\#\$\%";

    // processTextNew(): void
    // {
    //   if (confirm("Are you sure you want to start a new check? This will delete cookies (D:) and you will lose progress on the current check."))
    //   {
    //     this.cookieService.removeAll();
    //     this.processText();
    //   }

    // }

    processCookie(): void
    {
        // this.cookieCounter += 1;
        // if (this.cookieCounter % 10 === S0)
        {
            // this.cookieCounter = 0;
            localStorage.setItem(this.inputArrayCookie, this.inputTextArray.join(this.randomJoinString));
        }
    }

    // htmlToBB(str: string): string
    // {


    //   //should split this into two things
    //   let outStr = str.replace(new RegExp(this.redRemove, "g"), this.BBRemove)
    //           .replace(new RegExp(this.blueAdd, "g"), this.BBAdd)
    //           .replace(new RegExp(this.closeStrong, "g"), this.BBClose);

    //   // alert(outStr);
    //   let reText = this.BBRemoveRegex + "(.*?)" + this.BBCloseRegex + "+\\s" + this.BBRemoveRegex + "(.*?)" + this.BBCloseRegex;



    //   let re = new RegExp(reText);
    //   let matches = outStr.match(re);
    //   if (matches)
    //   {
    //     // alert(matches[1] + " " + matches[2]);
    //     let replacement = this.BBRemove + matches[1] + " " + matches[2] + this.BBClose;
    //     // alert(replacement);
    //     outStr = outStr.replace(re, replacement);
    //   }

    //   // outStr = outStr.replace(/color='red'/g, "color='" + this.removeColor + "'")
    //     //        .replace(/color='blue'/g, "color='" + this.addColor + "'");

    //   // outStr = 

    //   return outStr;
    // }



    processWord(e: any, i: number): void
    {


        let targetWord = this.inputTextArray[i];


        if (e.altKey)
        {
            this.showAddContent(e, i);
        }

        else if (e.ctrlKey)
        {

            if (targetWord.indexOf(this.blueAdd) > -1)
            {
                this.inputTextArray.splice(i, 1);


                // this.outputTextBB = this.htmlToBB(this.textArrayBB.join(" "));
                this.processCookie();
            }
            else
            {
                targetWord = targetWord.replace(new RegExp(this.redRemove, "g"), "");
                targetWord = targetWord.replace(new RegExp(this.closeRemove, "g"), "");
                this.inputTextArray[i] = targetWord;
                this.processCookie();

                // this.outputTextBB = this.htmlToBB(this.textArrayBB.join(" "));

            }
        }
        else
        {
            if (this.inputTextArray[i].indexOf(this.redRemove) > -1 || this.inputTextArray[i].indexOf(this.blueAdd) > -1)
            {

            }
            else
            {
                this.inputTextArray[i] = this.redRemove + this.inputTextArray[i] + this.closeRemove;
                this.processCookie();

                // this.outputTextBB = this.htmlToBB(this.textArrayBB.join(" "));
            }
        }
    }

    showAddContent(e: any, i: number): boolean
    {
        this.selectedWordIndex = i;

        return false;
    }

    addContent(value: string, i: number): void
    {
        this.processCookie();
        let valueArr = value.split(" ");

        if (valueArr[0] !== "")
        {
            valueArr = valueArr.map((el) =>
            {
                return this.blueAdd + el + this.closeStrong;
            })


            for (let ind = i; ind < i + valueArr.length; ind++)
            {
                this.inputTextArray.splice(ind + 1, 0, valueArr[ind - i]);
                // other stuff here

            }
        }


        // this.outputTextBB = this.htmlToBB(this.textArrayBB.join(" "));
        this.processCookie();
        this.selectedWordIndex = -1;

    }

    convertToBB(): void
    {
        // let outStr = this.inputTextArray.join(" ");
        let outStr = this.inputTextArray.join(" ")
            .replace(new RegExp(this.redRemove, "g"), this.BBRemove)
            .replace(new RegExp(this.closeRemove, "g"), this.BBRemoveClose)
            .replace(new RegExp(this.blueAdd, "g"), this.BBAdd)
            .replace(new RegExp(this.closeStrong, "g"), this.BBClose)
            .replace(new RegExp(this.openComRe, "g"), this.BBCom + "(Comment: ")
            .replace(new RegExp(this.closeComRe, "g"), ")" + this.BBClose)
            .replace(/ \<br\> /g, "\n");

        // alert(outStr);

        let reText = this.BBRemoveRegex + "(.*?)" + this.BBRemoveCloseRegex + "+\\s" + this.BBRemoveRegex + "(.*?)" + this.BBRemoveCloseRegex;

        let re = new RegExp(reText);
        let matches = outStr.match(re);


        if (matches)
        {
            while (matches)
            {
                let replacement = this.BBRemove + matches[1] + " " + matches[2] + this.BBRemoveClose;
                outStr = outStr.replace(re, replacement);
                matches = outStr.match(re);
            }
        }

        let jib1 = ")(*&^";
        let jib2 = "%$#@!";
        outStr = outStr.replace(new RegExp(this.BBRemoveRegex, "g"), jib1)
            .replace(new RegExp(this.BBRemoveCloseRegex, "g"), jib2);


        let comp = "^(?!.*\[color='red'\]).*$";
        let simp = "(.*?)";
        let reTextAdd = this.BBAddRegex + simp + this.BBCloseRegex + "+\\s" + this.BBAddRegex + simp + this.BBCloseRegex;

        let reAdd = new RegExp(reTextAdd);
        let matchesAdd = outStr.match(reAdd);
        // alert(matchesAdd[1] + "\n" + matchesAdd[2]);

        if (matchesAdd)
        {

            while (matchesAdd)
            {
                let fir = matchesAdd[1];
                let sec = matchesAdd[2];
                // if (fir.indexOf(this.BBAdd) > -1 || sec.indexOf(this.BBAdd))
                {
                    let replacement = this.BBAdd + matchesAdd[1] + " " + matchesAdd[2] + this.BBClose;
                    outStr = outStr.replace(reAdd, replacement);
                    matchesAdd = outStr.match(reAdd);
                }
                // alert(matchesAdd[1] + "\n" + matchesAdd[2]);

            }
        }
        let jib1re = "\\)\\(\\*\\&\\^";
        let jib2re = "\\%\\$\\#\\@\\!"
        outStr = outStr.replace(new RegExp(jib1re, "g"), this.BBRemove)
            .replace(new RegExp(jib2re, "g"), this.BBRemoveClose);

        outStr = outStr.replace(/color='red'/g, "color='" + this.removeColor + "'")
            .replace(/color='blue'/g, "color='" + this.addColor + "'")
            .replace(/color='green'/g, "color='" + this.commentColor + "'");

        this.outputTextBB = outStr;
        this.showBB = true;

    }

    ngOnInit()
    {
        this.processedTextToggle = false;
        this.processedTextClicked = false;

        // this.cookieCounter = 0;

        if (localStorage.getItem("inputText"))
        {
            this.inputText = localStorage.getItem("inputText").replace(/ \<br\> /g, "\n");
        }

        if (localStorage.getItem(this.inputArrayCookie))
        {
            this.inputTextArray = localStorage.getItem(this.inputArrayCookie).split(this.randomJoinString);
        }

        this.showBB = false;
    }

}