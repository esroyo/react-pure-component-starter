import createVisibleTodoList from 'components/visibleTodoList';
import createAddTodo from 'components/addTodo';
import createFooter from 'components/footer';

export default React => {

    const AddTodo = createAddTodo(React);
    const VisibleTodoList = createVisibleTodoList(React);
    const Footer = createFooter(React);

    return () => (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );

};
