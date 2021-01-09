import React from 'react';
import {Layout} from 'components/Layouts';
import {SearchButton, TextInput} from 'components/atoms'
import './App.css';

function App() {
  return (
    <Layout>
      <TextInput
        onChange={() => null}
        type={"text"}
        value={"Foo"}
      />
    </Layout>
  );
}

export default App;
