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
  inputText = "this is a test string";
  // inputTextArray: string[];
  inputTextArray = this.inputText.split(" ");

  redRemove = "<strong style='color:red;'>";
  blueAdd = "<strong style='color:blue;'>";
  closeStrong = "</strong>";

  selectedWordIndex: number;


  processText(): void
  {
  	this.inputTextArray = this.inputText.split(" ");
  }

  processWord(e: any, i: number): void
  {
  	let targetWord = this.inputTextArray[i];

  	if (e.ctrlKey)
  	{

  		if (targetWord.indexOf(this.blueAdd) > -1)
  		{
  			this.inputTextArray.splice(i, 1);
  		}
  		else
  		{
  	  		targetWord = targetWord.replace(new RegExp(this.redRemove, "g"), "");
	  		targetWord = targetWord.replace(new RegExp(this.closeStrong, "g"), "");
	  		this.inputTextArray[i] = targetWord;
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
  	valueArr = valueArr.map((el) =>
  	{
  		return this.blueAdd + el + this.closeStrong;
  	})
  	for (let ind = i; ind < i + valueArr.length; ind++)
  	{
  		this.inputTextArray.splice(ind + 1, 0, valueArr[ind - i]);
  		// other stuff here
  	}
  	this.selectedWordIndex = -1;
  	
  }

  ngOnInit() {
  }

}
