import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
        state = {
            languages: [
                {id: 1, value: "javascript", xp:1.8},
                {id: 2, value: "Css", xp:1.8},
                {id: 3, value: "Html", xp:1.8},
                {id: 4, value: "Php", xp:1.8},
            ],
            frameworks: [
                {id: 1, value: "React", xp:1.4},
                {id: 2, value: "Symfony", xp:1.8},
                {id: 3, value: "Bootstrap", xp:1.5},
                {id: 4, value: "Sass", xp:0.5},
            ]
        }

        render() {
            let {languages, frameworks} = this.state;
        

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="language"
                />
                <ProgressBar 
                languages={frameworks}
                title="frameworks & bibliothéque"
                className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;