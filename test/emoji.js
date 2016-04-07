/*jslint node: true*/
/*jslint expr: true*/
/*global describe, it*/
"use strict";

var should = require('should');
var emoji = require('../index');

describe("emoji.js", function () {
  describe("get(emoji)", function () {
    it("should return an emoji code", function () {
      var coffee = emoji.get('coffee');
      should.exist(coffee);
      coffee.should.be.exactly('☕️');
    });

    it("should support github flavored markdown emoji", function () {
      var coffee = emoji.get(':coffee:');
      should.exist(coffee);
      coffee.should.be.exactly('☕️');
    });
  });

  describe("which(emoji_code)", function () {
    it("should return name of the emoji", function () {
      var coffee = emoji.which('☕️');
      should.exist(coffee);
      coffee.should.be.exactly('coffee');
    });
    it("should work for differently formed characters", function () {
      var umbrella = emoji.which('☔');
      should.exist(umbrella);
      umbrella.should.be.exactly('umbrella');
    });
  });

  describe("emojify(str)", function () {
    it("should parse :emoji: in a string and replace them with the right emoji", function () {
      var coffee = emoji.emojify('I :heart:  :coffee:! -  :hushed::star::heart_eyes:  ::: test : : :+1:+');
      should.exist(coffee);
      coffee.should.be.exactly('I ❤️  ☕️! -  😯⭐️😍  ::: test : : 👍+');
    });
    it("should leave unknown emoji", function () {
      var coffee = emoji.emojify('I :unknown_emoji: :star: :another_one:');
      should.exist(coffee);
      coffee.should.be.exactly('I :unknown_emoji: ⭐️ :another_one:');
    });
  });

  it("should return an emoji code", function () {
    var coffee = emoji.emoji.coffee;
    should.exist(coffee);
    coffee.should.be.exactly('☕️');
  });
});
