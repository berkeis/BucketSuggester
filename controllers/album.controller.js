var Album = require('../models/album.model');


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
            return next(err);
        }
        res.send('Album Created successfully')
    })
};

exports.album_allRecords = function (req, res) {
	Album.find({}, function (err, results) {
        if (err) return next(err);
		res.send(results);
	});
};

exports.album_details = function (req, res) {
	Album.findById(req.params.id, function (err, album) {
        if (err) return next(err);
        res.send(album);
    });
};

exports.album_update = function (req, res) {
    Album.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, album) {
        if (err) return next(err);
        res.send('Album udpated.');
    });
};

exports.album_delete = function (req, res) {
	Album.findByIdAndRemove(req.params.id, function (err) {
		if (err) return next(err);
		res.send('Deleted successfully!');
	})
};