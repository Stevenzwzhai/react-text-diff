import React from 'react';
import ReactDOM from 'react-dom';
import CodeDiff from '../src/index.js'
import {Row, Col, Input, Form, Switch, InputNumber}from 'antd'
import 'antd/dist/antd.css';
const newStr = '{\n a: 1 \n}';
const oldStr = '{\n a: 2, \n b: 2 \n}';

const {TextArea}  = Input;
const FormItem = Form.Item;

class ReactTextDiff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            format: false,
            context: 5,
        }
    }

    handleFormatChange = () => {
        const format = this.state.format
        this.setState({format: !format})
    }

    handleContextChange = (e) => {
        this.setState({context: e})
    }


    render() {
        const {format, context } = this.state

        const outputFormat = format? 'line-by-line' : 'side-by-side';
        return (
                <div style={{padding: '10px'}}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <FormItem label="old_data">
                                <TextArea rows={12} defaultValue={oldStr}/>
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label="new_data">
                                <TextArea rows={12} defaultValue={newStr}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem label="result" >
                                <Switch checkedChildren="side-by-side" unCheckedChildren="line-by-line" defaultChecked onChange={this.handleFormatChange} />
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label="diff_effect"  >
                                <InputNumber  min={1} max={100000} defaultValue={context} onChange={this.handleContextChange}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <CodeDiff oldStr={oldStr} newStr={newStr} context={context} outputFormat={outputFormat}/>
                    </Row>
                </div>
        );
    }
}

ReactDOM.render(<ReactTextDiff/>, document.querySelector('#app'));
