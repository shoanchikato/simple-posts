function HelloWorldTwo() {
    const nums = [1, 2, 3, 4]

    return (
        <div>
            <h1>jsx value: {3 + 3}</h1>

            {nums.map(num => {
                return (
                    <p key={num}>{num}</p>
                )
            })}

        </div>
    )
}

const HelloWorldThree = () => {
    return (
        <h1>Hello World Three</h1>
    )
}

export { HelloWorldThree, HelloWorldTwo }