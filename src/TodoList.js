/**
 * 总结：
 * 1、使用jsx的文件必须引入react
 * 2、inmutable(https://reactjs.org/docs/optimizing-performance.html#using-immutable-data-structures)  不要直接操作源数据结构，性能优化会出问题。建议直接操作副本
 * 3、给dom绑定事件的时候注意当前作用域的this
 * 4、页面布局的时候使用Fragment可能会使你更加愉快（一个组件可以使用多个Fragment）
 * 5、注释jsx语法(注：例子中有转义)，eg：{/* xxxxxxxxxxxx *\/}
 */
import React, {Component, Fragment} from 'react';
import './todolist.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    handleInputChange(e) {
        this.setState({inputValue: e.target.value})
    }

    handleClick(e) {
        document.getElementById('textInput').focus();
        if (!this.state.inputValue) {
            alert('请输入内容！')
            return false;
        }
        this.setState({
            inputValue: '',
            list: [this.state.inputValue, ...this.state.list]
        })
    }

    handleDeleteClick(index) {
        let list = [...this.state.list];
        list.splice(index, 1);
        this.setState({list: list})
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input type="text"
                           id="textInput"
                           value={this.state.inputValue}
                           onChange={this.handleInputChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>submit</button>
                </div>
                {/*<Fragment>*/}
                {/*<div>一个组件可以使用多个Fragment</div>*/}
                {/*</Fragment>*/}
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleDeleteClick.bind(this, index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;
