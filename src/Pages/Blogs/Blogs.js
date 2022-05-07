import React from 'react';
import PageTitle from '../Shared/PageTitel/PageTitle';

const Blogs = () => {
    return (

        <div className='container mt-5'>
            <PageTitle title="Blogs"></PageTitle>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Difference between javascript and nodejs</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <table class="table table-success table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">javascript</th>
                                        <th scope="col">nodejs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Javascript is a computer language that is used to create website scripts.</td>
                                        <td>NodeJS is a runtime environment for Javascript.</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Javascript has the ability to add HTML and manipulate the DOM.</td>
                                        <td>Nodejs does not support the addition of HTML tags.</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Javascript can run in any browser engine, such as Safari's JS core and Firefox's Spidermonkey.</td>
                                        <td>Node's Javascript engine is called V8. js that parses Javascript and executes it.</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Javascript is used in frontend development.</td>
                                        <td>Nodejs is used in server-side development.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>When should you use nodejs and when should you use mongodb?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>When should we use Nodejs?</strong>
                            <br />
                            Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

                            So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.
                            <br />
                            <strong>When should we use  MongoDB?</strong>
                            <br />
                            If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Differences between sql and nosql databases</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <table class="table table-success table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">SQL</th>
                                        <th scope="col">NoSQL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>SQL databases are relational.</td>
                                        <td>NoSQL databases are non-relational.</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>SQL databases use structured query language and have a predefined schema.</td>
                                        <td>NoSQL databases have dynamic schemas for unstructured data.</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>SQL databases are vertically scalable</td>
                                        <td>NoSQL databases are horizontally scalable</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>SQL databases are table-based.</td>
                                        <td>NoSQL databases are document, key-value, graph, or wide-column stores.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>What is the purpose of jwt and how does it work?</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>What is JWT</strong>
                            <br />
                            JSON Web Token(JWT), is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                            <br />
                            <strong>How JWT Works</strong>
                            <br />
                            <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                            <p>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                            <p>Once decoded, you will get two JSON strings: The header and the payload,The signature. </p>
                            <p>The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. </p>
                            <p>The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.</p>
                            <p>There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.</p>
                            <p>The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;