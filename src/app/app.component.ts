import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private formBuilder: FormBuilder){}

  public form: any;

  private isWrong: boolean = false;

  public position: any = 0;

  private text: string = 'Lorem';

  public currentLetter: any = this.text[0];

  private size = this.text.length - 1;

  private errorCount = 0;

  public errorRegister: any[] = [];

  public successRegister: any[] = [];

  ngOnInit() {
    this.form = this.formBuilder.group({
      inputText: ['']
    })
  }

  inputText(){
    this.text = this.form.get("inputText").value;
    console.log(this.text);
  }

  @HostListener('document:keypress', ['$event'])
  public eventHandler(event: any): any{

    if(this.position >= this.size) {

      let subtraction = this.text.length - this.errorCount;
      let calc = (subtraction / this.text.length) * 100;

      calc == 100? alert("Você é um Hokage!") :
      calc < 99.9 && calc > 75? alert(`Você acertou `+calc+` por cento. Você é um Jonnin!`) :
      calc < 74.9 && calc > 50? alert("Você é um Chunnin!") :
      calc < 49.9 && calc > 25? alert("Você é um Gennin!") :
      calc < 25? alert("Você é um bosta!") : null

      this.position = 0;

    };

    this.isWrong = event.key == this.text[this.position] ? false : true;

    !this.isWrong? this.position =
    (
      this.errorRegister.includes(this.text[this.position]+this.position)? null : this.successRegister.push(this.text[this.position]+this.position),
      ++this.position
    ) :
    (++this.errorCount, this.errorRegister.push(this.text[this.position]+this.position));

    this.currentLetter = this.text[this.position];

    return event.key as string;

  }

  public split(): any[] {

    let splittedText = this.text.split('')
    let indexedLetters: any[] = [];

    splittedText.forEach((value, index) => { indexedLetters.push({value, index}) })

    return indexedLetters;

  }

}
