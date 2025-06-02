// BEGIN
const GoToPage = (url) => {
    window.location.href = url;
    return  `${navigator.userAgent.split(' ')[0]} ${url}`;
}
export default GoToPage;
// END