var Album = require('../models/album.model');


// @ts-ignore
exports.landing = function (req, res) {
    res.send('It is alive!');
};

exports.album_create = function (req, res) {

    var album = new Album(
        {
            name: req.body.name,
            length: req.body.length
        }
    );

    album.save(function (err) {
        if (err) {
            // @ts-ignore
            return res.send(err);
        }
        res.send('Album Created successfully')
    })
};

// @ts-ignore
exports.album_allRecords = function (req, res) {
    Album.find({}, function (err, results) {
        // @ts-ignore
        if (err) return next(err);
        res.send(results);
    });
};

exports.album_details = function (req, res) {
    Album.findById(req.params.id, function (err, album) {
        // @ts-ignore
        if (err) return next(err);
        res.send(album);
    });
};

exports.album_update = function (req, res) {
    // @ts-ignore
    Album.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, album) {
        // @ts-ignore
        if (err) return next(err);
        res.send('Album udpated.');
    });
};

const album_delete1 = (req, res) => {
    Album.findByIdAndRemove(req.params.id, function (err) {
        // @ts-ignore
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

module.exports = {
    album_delete: album_delete1
}