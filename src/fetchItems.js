"use strict";
const AWS = require("aws-sdk");

const fetchItems = async(event) => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    let items;

    try{        
        const results = await dynamoDB.scan({
            TableName: "serverless-lemos-table"
        }).promise;

        items = results.Items;

    } catch (error){
        console.log(error);       
    }

    return {
        statusCode: 200,
        body: JSON.stringify(items)
    };
}

module.exports = {
    handle:fetchItems
};