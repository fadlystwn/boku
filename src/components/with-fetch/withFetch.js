import React from 'react';

export default function withFetch(WrappedComponent, fetchData) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data: []
            }
        }

        componentDidMount() {
            fetchData.then( (response) => {
                try {
                    this.setState({ data: response})
                } catch(err) {
                    console.log(err.message)
                }
            })
        }
        
        render() {
            return <WrappedComponent data={this.state.data} {...this.props}/>
        }
    }
}
