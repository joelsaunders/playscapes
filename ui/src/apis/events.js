export function getList(event_type) {
    return fetch(`${process.env.REACT_APP_API_URL}api/v1/events/?event_type=${event_type}`).then(data => data.json())
}