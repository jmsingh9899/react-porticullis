import React from "react";
import { Grid } from "semantic-ui-react";
import './About.css'



function About() {
    return (
        <>
            <Grid>
                <Grid.Row>
                    <Grid.Column computer={6} tablet={1}></Grid.Column>
                    <Grid.Column computer={4} tablet={16}>
                        <ul>
                            <li>
                                <a href="https://github.com/jmsingh9899" target="_blank">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                                        alt="The Github icon" width="100px" height="100px" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/jmsingh9899" target="_blank">Github</a>
                            </li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column computer={6} tablet={16} textAlign='center'>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column computer={6} tablet={1}></Grid.Column>
                    <Grid.Column computer={4} tablet={16}>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/jonathan-singh-351645139/" target="_blank">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAaVBMVEUAd7X///8AcLEEebb7/f4Debb9/v79/v8DeLY8l8Y7lsYAbbCcyuKlz+WQxN+Lwd0KfbiDvdvl8fcAc7O+3OwgiL6x1ehFnMlytNZqsNQZhLzF4O7w9/tSo81gqtGp0ebc7PUsjsJ8udngaOvIAAADg0lEQVRoge2abZeqIBCAGV7EjXItKjc1y/7/j7xD7m5AWHdD+uScs3s8kDzOIMwMDoGrSJ4lEC6H0ckVkUEiyeQPBC+ar+pjcqm+GsQMEAntUSuaQJQ+toZC8F+7U4KJBMKE6ltUwkAqJUgiEapCAJGwpSwVgxBGtyAJh4NKCVEH4AStRZNZC+1F0V5orgXN00FyukBzZekh2XsgbzFXCMIGSQlhTCsjegrMCEQQVXfF8rOrFYm3YxjCdFnw6zbdFkJHr6AgROjdGYAbATjXOlaXEISRcgN88GEZh3NJIuclBBF0BfzXr3EoYve1ACTXPViuOAO+izRYAMLUxVLEqBK7RQcggp48yHJ6SG5cjAWRsI/0A0FN9g6Ew2p6TZhae+a6pDDXwn67UKt++rcL3+Gts072sW4gDOn5L4VjRBa7rwT3LkarDMNvmeEf8EV0tDSyC9O++dZku4uPyEb8CdO6KrbNtvjQOt5rjXnGnGGkrKmibALfP+7jBQ6fs0lCvnHIn4Tlj2KBsTkJX4cGYgLH1yiD8n+A/LcgACevrHe7ujRXQYXCEFHaIsLNZjgMnMrjstm0nLebZnXodSi6Cbvfz3Zzk3Y97I/ozOxmE2Dkql5vnCS0OQbe+WAgoZbOjcUPpLBbeU0I7dprZi4xlZYyM8ENNP3d6h2DcPkj/Ab5vDVjkllrgg/DpfNA+HN59D3DKMTahW3ILbxoa3Ru/D75x59Uni6vQ3hZOL7N8j9+ePMqRMLmACNnGHce6FUItrcgA4ThCdwU9HUIjDLuVImAjB/4+EFnjCZXba6xv/SU8oLOOEhmvQgu5GRPShQER25Pl667nFrXeBmc7ZUSA8FxLyU1mSWtTw7Fm5S4ia/Ud5KsnVtM34dlrwiIxNkV31ZhhG1sXTh01sy/DkG7W55SqC9npcLXJBBvHEzPLFU4rCeBgBeHs7MDKaaA4A5ZWggvdXKzs5chGTSOn2XKTZlX02jiJnnGOU8O8ZO8u146CWTpQdYzZIbMkBkyQ2bIDJkhA+QmDsRqDkCs3tXTqH4FtiyDxx6BkMiW/ZO4K6eH/eom+27oy2nnNB+8DPfo9j5JgswBk/PVnj1sfnzTKMScPVpf7fMnzU97JzqDfCxvhMxfsf8Ake8pX3hLIUbqkhJtSkpSF8ccTXGMKSXqk5f5vKVg6Xpkkbz06j1FZJC6HO4fbRVnSvd35FUAAAAASUVORK5CYII="
                                        alt="The Linkedin icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/jonathan-singh-351645139/" target="_blank">Linkedin</a>
                            </li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column computer={6} tablet={16} textAlign='center'>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column computer={6} tablet={1}></Grid.Column>
                    <Grid.Column computer={4} tablet={16}>
                        <ul>
                            <li>
                                <a href="mailto: jmsingh9899@gmail.com" target="_blank">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                                        alt="A gmail icon" width="100px" height="100px" />
                                </a>
                            </li>
                            <li>
                            <a href="mailto: jmsingh9899@gmail.com" target="_blank">Email</a>
                            </li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column computer={6} tablet={16} textAlign='center'>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    )
}

export default About;