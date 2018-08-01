import React, { Component } from 'react'
import styled from 'styled-components'

import Card from '../Card'
import Heading, { HeadingSmall } from '../Heading'
import { COLORS } from '../../constants'

/**
 * For this component, you will need to grab some JSON data from
 * the API endpoint provided below and display it inside a
 * CodeBlock. While the data is loading, display 'Loading...'.
 * If it fails, make sure to notify the user.
 */
const jsonUri = 'https://jsonplaceholder.typicode.com/users/1'
// grabs the JSON data from uri and sets it equal to data to be displayed later
var result
var data = fetch(jsonUri)
.then(data => data.json())
result = data
console.log(result)

export default class FetchJson extends Component {

  render() {
    return (
    // this should display the json data as a string but I can't seem to find a way to do this properly
    // if you check the console log you can see it does fetch just doesn't and the correct data is soted I just cant
    // render it properly 
      <Card>
        <Heading color={COLORS.pink[300]}>FetchJson Component</Heading>
        <HeadingSmall>
          This component grabs JSON from an API and displays it.
        </HeadingSmall>
        <CodeBlock>
        {result.toString()}
        </CodeBlock>
      </Card>
    )
  }
}

const CodeBlock = styled.pre`
  background: ${COLORS.white[300]};
  color: ${COLORS.black[100]};
  border-radius: 4px;
  border: 2px solid ${COLORS.white[700]};
  padding: 25px;
`
