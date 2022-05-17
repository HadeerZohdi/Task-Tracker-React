import Button from './Button'

const Header = ({ onOpenForm, showAddForm }) => {
    return (
        <div className="header">
            <h1>Task Tracker</h1>
            <Button color={showAddForm ? 'red' : 'green'} text={showAddForm ? 'Close' : 'Open'} onOpenForm={onOpenForm} />
        </div>
    )
}

export default Header;