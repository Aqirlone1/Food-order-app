
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
function App() {
    const expense = [
        {
            id: 'e1',
            title: 'Toilet paper',
            amount: 94.12,
            date: new Date(2022, 9, 7)
        },
        {
            id: 'e2',
            title: 'car polish',
            amount: 194.12,
            date: new Date(2022, 12, 6)
        },
        {
            id: 'e3',
            title: 'shoes',
            amount: 974.12,
            date: new Date(2022, 9, 7)
        },
        {
            id: 'e4',
            title: 'Mobile Phones',
            amount: 99.12,
            date: new Date(2021, 7, 7)
        }
    ]

    return (
        <div className="App">
            <NewExpense/>
            <Expenses items = {expense}  />
        </div>);
}

export default App;
