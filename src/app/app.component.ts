import { Component, HostListener, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private isWrong: boolean = false;

  public position: any = 0;

  private text: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium autem iste reiciendis nulla. Libero, ex quibusdam ratione at, ipsam commodi quidem asperiores consequatur assumenda tempore modi, praesentium voluptas iusto.';

  public currentLetter: any = this.text[0];

  private size = this.text.length - 1;

  private errorCount = 0;

  public errorRegister: any[] = []


  @HostListener('document:keypress', ['$event'])
  test(event: any): any{

    if(this.position > this.size) { return };

    this.isWrong = event.key == this.text[this.position] ? false : true;

    !this.isWrong? this.position = ++this.position : (++this.errorCount, this.errorRegister.push(this.text[this.position]+this.position ));

    console.log(this.errorRegister);

    console.log(this.errorRegister.includes('o1'))

    this.currentLetter = this.text[this.position];

    return event.key as string;

  }

  split(){

    let splittedText = this.text.split('')
    let indexedLetters: any[] = [];

    splittedText.forEach((value, index) => { indexedLetters.push({value, index}) })

    console.log(indexedLetters)

    return indexedLetters;

  }

}
