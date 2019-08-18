import React, { Component } from 'react'
import PropTypes from 'prop-types'

import constants from "../constant";



let nextTodoId = 0;

export const addColors = content =>({
    "type" : constants.ADD_COLORS,
    "payload" : {
        id : ++nextTodoId,
        ...content,
        timeStamp: new Date()
    }
})

export const getColors =()=>({
    "type" : constants.GET_COLORS
})