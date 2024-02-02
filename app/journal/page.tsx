'use client'
import AuthenticatedComponent from '@/src/_components/authenticatedComponent/AuthenticatedComponent';
import ExpandableRow from '../../src/_components/expandableRow/ExpandableRow'
import {generateClient} from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource'
import React from 'react';

interface Todo {
  id: string;
  content: string;
  // Add other fields as per your Todo model
}
interface TodoListResponse {
  data: Todo[];
  errors?: any[];
}


const client = generateClient<Schema>();



async function fetchJournalPosts() {
  const { data: todos, errors } = await client.models.Todo.list() as TodoListResponse;
}
fetchJournalPosts() 

const Journal = () => { 
  const [todos, setTodos] = React.useState<Todo[]>([]);
    
  return (
    <>
    {/* <AuthenticatedComponent> */}
      <section>       
        <h1>Din journal</h1>
        <ul>{todos.map((todo) => <li key={todo.id}>{todo.content}</li>)}</ul>
        <ExpandableRow
            date='2022-01-18'
            type='Telefonkontakt'
            from='Ögonmottagningen Uddevalla sjukhus'
            doctor='Dr. Smith'
            additionalInfo='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod erat vel justo fringilla cursus.'
        />
        <ExpandableRow
            date='2022-01-20'
            type='Besöksanteckning'
            from='Ögonmottagningen Uddevalla sjukhus'
            doctor='Dr. Smith'
            additionalInfo='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod erat vel justo fringilla cursus.'
        />
      </section>
    {/* </AuthenticatedComponent> */}
    </>
  );
};

export default Journal;
