export default function Signout() {
    if (typeof window !== 'undefined') {
        localStorage.clear();
        document.location.href = "/";
    }
}