import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scavenger',
  templateUrl: './scavenger.component.html',
  styleUrls: ['./scavenger.component.css']
})
export class ScavengerComponent implements OnInit {
  questions: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<any[]>('assets/JSON/scavengerQuestions.json').subscribe(
      (data) => {
        this.questions = data;
      },
      (error) => {
        console.error('Error loading questions:', error);
      }
    );
  }

  checkAnswer(index: number) {
    const question = this.questions[index];
    question.userAnswer = question.userAnswer.trim();

    if (question.userAnswer.toLowerCase() === question.answer.toLowerCase()) {
      console.log(`Question ${index + 1}: Correct`);
    } else {
      console.log(`Question ${index + 1}: Incorrect`);
    }
  }
}