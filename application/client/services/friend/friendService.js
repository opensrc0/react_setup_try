export const transformFriendList = () => {
    localStorage.setItem("friendList", JSON.stringify({'name': 'himanshu', 'amount': '1000', id: 1}));
    localStorage.setItem("friendList", JSON.stringify({'name': 'ravi', 'amount': '-500', 'id': 2}));

    const result = JSON.parse(localStorage.getItem(friendList));
    console.log(result);
    return ({
        byId: data.result.reduce((obj, result) => ({
            ...obj,
            [result.id]: {
                id: result.id,
                name: result.name,
                amount: result.amount
            },
        }), {}),
    });
}
