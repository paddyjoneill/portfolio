// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

var aws = require('aws-sdk');
var ses = new aws.SES({ region: 'eu-west-2' });
exports.handler = async function (event) {
    const body = JSON.parse(event.body);
    const { from, to, name, message, phone, secret } = body;

    const secretCorrect = secret === process.env.SECRET_KEY;

    if (!secretCorrect) {
        return false;
    }

    const allowedToAddresses = [
        'hello@patrickoneill.dev',
        'webform@wellswireline.com',
        'info@accsensum.com',
        'info@arkanetech.com',
    ];

    if (!allowedToAddresses.includes(to)) {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: 'to address not recognised' }),
            isBase64Encoded: false,
        };
    }

    const subject = `New contact from ${from}`;
    const content = `email: ${from}, name: ${name}, phone: ${phone}, message: ${message}`;

    const fromAddress = 'hello@patrickoneill.dev';
    const params = {
        Destination: {
            ToAddresses: [to],
        },
        Message: {
            Body: {
                Text: { Data: content },
            },

            Subject: { Data: subject },
        },
        Source: fromAddress,
    };

    await ses
        .sendEmail(params)
        .promise()
        .then((data) => {
            console.log(data);
            const response = {
                statusCode: 200,
                body: JSON.stringify(data),
                isBase64Encoded: false,
            };
            callback(null, response);
        })
        .catch((err) => {
            console.error(err);
            const response = {
                statusCode: 500,
                body: JSON.stringify(err),
                isBase64Encoded: false,
            };
            callback(err, response);
        });
};
