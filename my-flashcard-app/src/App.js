import React, {useState} from 'react';
import FlashcardList from './FlashcardList';

function App() {
  const [flashcards, setFlashcards] = useState(Sample_flashcards)
  return (
   <FlashcardList flashcards = {flashcards}/>
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
