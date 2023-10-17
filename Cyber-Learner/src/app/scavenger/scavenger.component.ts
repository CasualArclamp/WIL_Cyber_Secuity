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

  // Checks the answers in JSON file against user input
  checkAnswer(index: number) {
    const question = this.questions[index];
    question.userAnswer = question.userAnswer.trim().toString().toLowerCase();

    if (question.answers && Array.isArray(question.answers)) {
      const correctAnswers = question.answers.map((answer: string) => answer.toString().toLowerCase());
  
      // Checks if answers are included in the questions array of answers
      if (correctAnswers.includes(question.userAnswer)) {
        console.log(`Question ${index + 1}: Correct`);
      } else {
        // This line is only necessary when debugging
        // console.log(`Question ${index + 1}: Incorrect`);
      }
    } else {
      console.log(`Question ${index + 1}: No correct answers defined`);
      console.log(question.answers);
    }
  }

  // Provides class for dynamic CSS of answer section
  isAnswerCorrect(index: number): boolean {
    const question = this.questions[index];
    const userAnswer = question.userAnswer? question.userAnswer.trim().toLowerCase() : '';
    const correctAnswers = question.answers.map((answer: string) => answer.toLowerCase());
  
    return correctAnswers.includes(userAnswer);
  }
}