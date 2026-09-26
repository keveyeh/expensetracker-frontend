function Student(props){
    return(
        <div>
            <p>name:{props.name}</p>
            <p>age:{props.age}</p>
            <p>is student:{props.isStudent ? 'yes':'no'}</p>
        </div>
    );
}
export default Student