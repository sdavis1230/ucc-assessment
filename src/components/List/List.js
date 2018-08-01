import React, { Component } from 'react'
import styled from 'styled-components'

import Card from '../Card'
import Heading, { HeadingSmall } from '../Heading'

/**
 * In this very basic component, display a list of data
 * contained in the provided `content` variable below.
 *
 * Don't overthink it, this is super basic.
 */
const content = [
  "I'm a list item!",
  'Hey look, I am too!',
  "I'm another list item."
]

export default class List extends Component {
  render() {
    return (
    //this was an attempt to put each elemnt on a new line but nothing I tried would put each item on a new line
      <Card>
        <Heading>List Component</Heading>
        <HeadingSmall>This component displays a list.</HeadingSmall>
        {content.join("\n")}
      </Card>
    )
  }
}

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  margin-bottom: 4px;
`
