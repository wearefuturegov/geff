# GEFF

New Front End gem to be used as a base for Futuregov projects.. (geff= anagram of FG FE )

<img src="https://github.com/wearefuturegov/geff/raw/master/geff.gif" alt="GEFF" width="200px" height="200px">

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'geff'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install geff

Include in your css application file reference to both geff/variables and geff/style.

```scss
@import 'geff/variables'
@import 'geff/style'
```

Include in your javascript application file reference to any of the geff js files required - **ensuring that it is after reference to jquery**.

```js
//= require geff/alerts
```

After this make sure you include reference to the function in your `public.js` file in a document ready function.

```js
$('#alerts').alerts();
```

## Usage

See the **[GEFF Wiki](https://github.com/wearefuturegov/geff/wiki)** for full information about the framework, how to use it and what it contains.

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/wearefuturegov/geff.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
