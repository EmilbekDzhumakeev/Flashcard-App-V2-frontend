import React, {useEffect, useState} from 'react';
import FlashcardList from './FlashcardList';
import './app.css' 
import axios from 'axios'

function App() {
  const [flashcards, setFlashcards] = useState(Sample_flashcards)


  useEffect(() => {
  axios
        .get('https://opentdb.com/api.php?amount=10')
        .then (res => {
          setFlashcards(res.data.results.map((questionItem, index) => {
            const answer  = decodeString(questionItem.correct_answer)
            const options = [
              ...questionItem.incorrect_answers.map(a => decodeString(a)),
               answer
              ]
            return {
             id: '${index}-${Date.now()}',
              question: decodeString(questionItem.question), 
              answer: answer,
             options: options.sort(() => Math.random() - .5)
            }
          }))
         
        })
      },[]) 

      function decodeString(str){
        const textArea  = document.createElement('textarea')
        textArea.innerHTML= str 
        return textArea.value
      }

  return (
    <div className = "container">
   <FlashcardList flashcards = {flashcards}/> 
   </div>
  );
}
 
const Sample_flashcards = [
  {
    id: 1,
    question: 'what is 2+4?',
    answer: '4',
    options: [
      '2',
      '3',
      '4'
    ]
  },
  {
    id: 2,
    question: 'question 2?',
    answer: 'answer 2',
    options: [
      'answer 1',
      'answer 2',
      'answer 3'
    ]
  },
  {
    id: 3,
    question: 'question 3?',
    answer: 'answer 3',
    options: [
      'answer 2',
      'answer 3',
      'answer 4'
    ]
  }
]

export default App;
