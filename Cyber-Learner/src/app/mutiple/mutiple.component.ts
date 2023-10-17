import { Component, OnInit } from '@angular/core';
import { QuetionsService } from '../service/quetions.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-mutiple',
  templateUrl: './mutiple.component.html',
  styleUrls: ['./mutiple.component.css']
})
export class MutipleComponent implements OnInit {
  
  public questionList : any = [];
  public currentQuestion:number = 0;
  public points: number = 0;
  public currentStatus: string = 'Quiz Running';
  correctAnswer:number = 0;
  wrongAnswer:number = 0;
  progress:string = "0";
  interval$: any;
  
  constructor(private questionsService : QuetionsService) { }

  ngOnInit(): void {
    this.getAllQuestiions();
  }

  getAllQuestiions() {
    this.questionsService.getQuestionJson()
    .subscribe(res=>{
      this.questionList = res.questions;
    })
  }

  nextQuestion() {
    if(this.currentQuestion < 4) {
      this.currentQuestion++;
    }
    else {
      this.currentQuestion = 0;
    }
  }

  previousQuestion() {
    if(this.currentQuestion > 0) {
      this.currentQuestion--;
    }
    else {
      this.currentQuestion = 0;
    }
  }

  select(currentQno:number, option:any) {
    if (option.correct) {
      this.points += 10;
      this.getProgressPercent();
      this.correctAnswer++;
      this.currentQuestion++;
      if(this.currentQuestion >= 4) {
        this.currentStatus = 'Quiz finished';
      }
    }

    else {
      this.wrongAnswer++;
      this.currentQuestion++;
      this.getProgressPercent();
      if(this.currentQuestion >= 4) {
        this.currentStatus = 'Quiz finished';
      }
    }
  }

  getProgressPercent(){
    this.progress = (((this.currentQuestion + 1)/this.questionList.length)*100).toString();
    return this.progress;
  }

}
