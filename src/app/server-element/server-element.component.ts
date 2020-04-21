import { Component, 
OnInit, 
Input, 
ViewEncapsulation, 
OnChanges, 
SimpleChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked, 
OnDestroy,
ViewChild,
ElementRef,
ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, //none, native
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading',{static: true}) header: ElementRef;
  @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!')
   }
  
   ngOnChanges(changes: SimpleChanges){
    console.log('constructor called!')
    console.log(changes)
   }

  ngOnInit(): void {
    console.log('init called!')
    console.log(this.header.nativeElement.textContent)
    console.log('text content of paragraph '+ this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(){
    console.log('ngdocheck called')
  }

  ngAfterContentInit(){
    console.log('ngafter')
    console.log('text content of paragraph '+ this.paragraph.nativeElement.textContent)
  }
  ngAfterContentChecked(){
    console.log('ngaftercontentinitchecked')
  }

  ngAfterViewInit(){
    console.log('ngafterview')
    console.log(this.header.nativeElement.textContent)
  }
  ngAfterViewChecked(){
    console.log('ngafterviewchecked')
  }
  ngOnDestroy(){
    console.log('Destroyed')
  }
}
