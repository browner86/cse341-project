exports.getIndex = (req, res, next) => {
    if (req.session.style === undefined)  {
        req.session.style = {backgroundColor: 'white'};
    }
    if (req.session.counter === undefined)  {
        req.session.counter = 0;
    }
    res.render('pages/ta05', {
        title: 'Team Activity 05',
        path: '/ta05', // For pug, EJS
        activeTA05: true, // For HBS
        contentCSS: true, // For HBS
        styles: req.session.style,
        counter: req.session.counter
        
      });
}

exports.changeStyle = (req, res, next) => {
    req.session.style = {color: req.body.textColor, backgroundColor: req.body.backgroundColor};
    res.redirect('/ta05');
}

exports.counterIncrement = (req, res, next) => {
    req.session.counter += 1;
    res.redirect('/ta05');

}
exports.counterDecrement = (req, res, next) => {
    req.session.counter -= 1;
    res.redirect('/ta05');

}

exports.reset = (req, res, next) => {
    req.session.destroy();
    res.redirect('/ta05');   
}