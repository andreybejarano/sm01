const controller = {
    index: (req, res) => {
        res.send([
            {
                id: 1,
                name: 'aaaaa'
            },
            {
                id: 2,
                name: 'bbb'
            },
        ]);
    }
};

module.exports = controller;