import { Component, OnInit, Directive } from '@angular/core';
import {ColorPickerService} from "ngx-color-picker";

import {SafeHtmlPipe} from "../safe-html.pipe";

// import { FocusDirective } from "../focus.directive";

@Component({
  selector: 'app-gp',
  templateUrl: './gp.component.html',
  styleUrls: ['./gp.component.css']

})




export class GpComponent implements OnInit {

  constructor() { }


  // inputText: string;
  inputText = "this is a test string this is a test string this is a test string ";
  inputTextArray: string[];
  // inputTextArray = this.inputText.split(" ");
  outputTextBB: string;
  textArrayBB: string[];

  addColor = "#0000ff";
  removeColor = "#ff0000";
  commentColor = "#00ff00";

  redRemove = "<strong style='color:red;'>";
  blueAdd = "<strong style='color:blue;'>";
  closeStrong = "</strong>";

  BBRemove = "\[color='red'\]\[b\]";
  BBAdd = "\[color='blue'\]\[b\]";
  BBClose = "\[\/b\]\[\/color\]";

  BBRemoveRegex = "\\[color='red'\\]\\[b\\]";
  BBAddRegex = "\\[color='blue'\\]\\[b\\]";
  BBCloseRegex = "\\[\\/b\\]\\[\\/color\\]";

  selectedWordIndex: number;


  processText(): void
  {
  	this.inputTextArray = this.inputText.split(" ");
  	this.textArrayBB = this.inputTextArray;
  	this.outputTextBB = this.inputTextArray.join(" ");

  }

  htmlToBB(str: string): string
  {


  	//should split this into two things
  	let outStr = str.replace(new RegExp(this.redRemove, "g"), this.BBRemove)
  					.replace(new RegExp(this.blueAdd, "g"), this.BBAdd)
  					.replace(new RegExp(this.closeStrong, "g"), this.BBClose);

  	// alert(outStr);
  	let reText = this.BBRemoveRegex + "(.*?)" + this.BBCloseRegex + "+\\s" + this.BBRemoveRegex + "(.*?)" + this.BBCloseRegex;



  	let re = new RegExp(reText);
    let matches = outStr.match(re);
    if (matches)
    {
    	// alert(matches[1] + " " + matches[2]);
    	let replacement = this.BBRemove + matches[1] + " " + matches[2] + this.BBClose;
    	// alert(replacement);
    	outStr = outStr.replace(re, replacement);
    }
    
    // outStr = outStr.replace(/color='red'/g, "color='" + this.removeColor + "'")
  		// 		   .replace(/color='blue'/g, "color='" + this.addColor + "'");

  	// outStr = 

  	return outStr;
  }



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

  		}
  		else
  		{
  	  		targetWord = targetWord.replace(new RegExp(this.redRemove, "g"), "");
	  		targetWord = targetWord.replace(new RegExp(this.closeStrong, "g"), "");
	  		this.inputTextArray[i] = targetWord;
  			
	  		
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
  		  	this.inputTextArray[i] = this.redRemove + this.inputTextArray[i] + this.closeStrong;
  			
  		  	
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

  	this.selectedWordIndex = -1;
  	
  }

  convertToBB(): void
  {
  	let outStr = this.inputTextArray.join(" ").replace(new RegExp(this.redRemove, "g"), this.BBRemove)
  					.replace(new RegExp(this.blueAdd, "g"), this.BBAdd)
  					.replace(new RegExp(this.closeStrong, "g"), this.BBClose);


  	let reText = this.BBRemoveRegex + "(.*?)" + this.BBCloseRegex + "+\\s" + this.BBRemoveRegex + "(.*?)" + this.BBCloseRegex;

  	let re = new RegExp(reText);
    let matches = outStr.match(re);


    if (matches)
    {
	    while (matches)
	    {
	    	let replacement = this.BBRemove + matches[1] + " " + matches[2] + this.BBClose;
	    	outStr = outStr.replace(re, replacement);
	    	matches = outStr.match(re);
	    }
	}

  	let reTextAdd = this.BBAddRegex + "(.*?)" + this.BBCloseRegex + "+\\s" + this.BBAddRegex + "(.*?)" + this.BBCloseRegex;

  	let reAdd = new RegExp(reTextAdd);
    let matchesAdd = outStr.match(reAdd);

    if (matchesAdd)
    {
        while (matchesAdd)
	    {
	    	let replacement = this.BBAdd + matchesAdd[1] + " " + matchesAdd[2] + this.BBClose;
	    	outStr = outStr.replace(reAdd, replacement);
	    	matchesAdd = outStr.match(reAdd);
	    }	
    }
	

    outStr = outStr.replace(/color='red'/g, "color='" + this.removeColor + "'")
  				   .replace(/color='blue'/g, "color='" + this.addColor + "'");

  	this.outputTextBB = outStr;

  }

  ngOnInit() 
  {

  }

}
