import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Card from '../Card'
import Heading, { HeadingSmall } from '../Heading'
import { COLORS } from '../../constants'

/**
 * For this component, display a text input and allow the user
 * to search for values contained within the `items` variable
 * below. If no input exists, the Results section should be
 * removed from the DOM. If there are no matches for the search
 * query, the user should be notified that no matches were found.
 * If match(es) were found, display them below the input.
 */
const items = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District Of Columbia',
  'Federated States Of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Islands',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
]
var searchString = null
var matchingElements = []
const filterItems = (query) => {
    return items.filter((elements) =>
    elements.toLowerCase().indexOf(query.toLowerCase()) > -1
    )
  }

export default class SearchList extends Component {
    // set current search box to filter list by
  filterUpdate () {
    const val = this.myValue.value
    searchString = "" + val

    // if nothing is input display no results
        if (searchString.length == 0) {
        searchString = "zzzzzzzzzzzzzzzzzzzzzz"
    }
    // filter the list and update
    matchingElements = filterItems(searchString)
    this.forceUpdate()
  }
  render() {
  if (matchingElements.length == 0) {
  return (
  <Card>
    <Heading color={COLORS.yellow[300]}>FilterList Component</Heading>
          <HeadingSmall>
            This component filters a list based on user input.
          </HeadingSmall>
          <input
              type = "text"
              ref = {(value) => this.myValue = value}
              placeholder = "Search..."
              onChange = {this.filterUpdate.bind(this)}
          />
          </Card>
  )
  }
    return (
    // I was able to get all the correct results, just not able to properly format it so every element has its own
    //box around it
      <Card>
        <Heading color={COLORS.yellow[300]}>FilterList Component</Heading>
        <HeadingSmall>
          This component filters a list based on user input.
        </HeadingSmall>
        <input
            type = "text"
            ref = {(value) => this.myValue = value}
            placeholder = "Search..."
            onChange = {this.filterUpdate.bind(this)}
        />
        <SearchResultsHeading> Results </SearchResultsHeading>
        <SearchResultsList>
        <SearchResult>
        {matchingElements}
        </SearchResult>
        </SearchResultsList>
      </Card>
    )
  }
}

const SearchInput = styled.input`
  display: block;
  border-radius: 4px;
  font-size: 16px;
  padding: 6px 10px 5px;
  border: 1px solid ${COLORS.white[100]};
  &:focus {
    outline: none;
  }
`

const SearchResultsHeading = styled.div`
  font-weight: 700;
  text-align: center;
  margin: 5px 0;
`

const SearchResultsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  border: 1px solid ${COLORS.black[500]};
  overflow: hidden;
`

const SearchResult = styled.li`
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid ${COLORS.black[500]};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: ${COLORS.blue[500]};
    color: #fff;
  }
`
