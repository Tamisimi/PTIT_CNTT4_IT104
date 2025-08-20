import React, { Component } from 'react';

type State = {
    theme: string;
    language: string;
};

export default class App extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            theme: 'dark',
            language: 'vietnamese',
        };
    }

    render() {
        const { theme, language } = this.state;

        return (
            <div style={{ background: theme === 'light' ? '#fff' : '#000', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
                <h2>Nền: {theme === 'light' ? 'Sáng' : 'Tối'}</h2>
                <h2>Ngôn ngữ: {language === 'english' ? 'English' : 'Tiếng Việt'}</h2>
                {theme === 'dark' && language === 'vietnamese' && (
                    <p> • Nền theme = dark và language = vietnamese</p>
                )}
            </div>
        );
    }
}