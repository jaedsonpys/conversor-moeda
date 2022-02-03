import React from 'react'

class App extends React.Component {

    state = {
        dolarPrice: 0
    }

    async componentDidMount() {
        var json = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
            .then(T => T.json())

        this.setState({
            dolarPrice: Number(json['USDBRL']['bid'])
        })
    }

    render() {
        const dolarPrice = this.state.dolarPrice

        return (
            <div className='app'>
                <main>
                    <div className='content'>
                        <div className='dolarArea'>
                            <h1>R$ {dolarPrice.toFixed(2)}</h1>
                        </div>
                        <p>USD {'->'} BRL</p>
                    </div>
                </main>
                <footer>
                    <div className='creator'>
                        <p>Created by @jaedsonpys</p>
                        <a href='https://github.com/jaedsonpys'>Meu GitHub</a>
                    </div>
                </footer>
            </div>
        )}
}

export default App