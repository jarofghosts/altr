var altr = require('../../lib/node')
  , test = require('tape')

test('include tag', function(t) {
  altr.include('content', '<div altr-text="content"></div>')

  var template = altr(
      '<div altr-include="content"></div>'
    , {content: 'hi!!!'}
  )

  t.plan(1)
  t.equal(
      template.toString()
    , '<div altr-include="content"><div altr-text="content">hi!!!</div></div>'
  )
})
