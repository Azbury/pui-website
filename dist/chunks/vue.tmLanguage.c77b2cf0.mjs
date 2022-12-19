const name = "vue";
const scopeName = "source.vue";
const fileTypes = [
	"vue"
];
const uuid = "5512c10d-4cc5-434c-b8fc-53b912f55ab3";
const patterns = [
	{
		begin: "(<)(slim)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			}
		},
		end: "(</)(slim)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</slim>)",
				contentName: "text.slim",
				patterns: [
					{
						include: "text.slim"
					}
				]
			}
		]
	},
	{
		begin: "(<)(i18n)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			}
		},
		end: "(</)(i18n)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</i18n>)",
				contentName: "source.json",
				patterns: [
					{
						include: "source.json"
					}
				]
			}
		]
	},
	{
		begin: "(<)(docs)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			}
		},
		end: "(</)(docs)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</docs>)",
				contentName: "text.html.markdown",
				patterns: [
					{
						include: "text.html.markdown"
					}
				]
			}
		]
	},
	{
		name: "comment.block.html",
		begin: "<!--",
		end: "-->",
		captures: {
			"0": {
				name: "punctuation.definition.comment.html"
			}
		}
	},
	{
		begin: "(<)(?=template.*[^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			}
		},
		end: "(/>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				begin: "(template)",
				beginCaptures: {
					"1": {
						name: "entity.name.tag.template.html"
					}
				},
				end: "(?=/>)",
				patterns: [
					{
						include: "#tag-stuff"
					}
				]
			}
		]
	},
	{
		begin: "(<)(template)(?=[^>]*>[^/>]*</template>)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.template.html"
			}
		},
		end: "(</)(template)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.template.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</template>)"
			}
		]
	},
	{
		begin: "(<)(template)\\b(?=[^>]*lang=('jade'|\"jade\"|'pug'|\"pug\"))(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.template.html"
			}
		},
		end: "(</)(template)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.template.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "text.pug",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</template>)",
				patterns: [
					{
						include: "text.pug"
					}
				]
			}
		]
	},
	{
		begin: "(<)(template)\\b(?=[^>]*lang=('haml'|\"haml\"))(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.template.html"
			}
		},
		end: "(</)(template)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.template.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "text.haml",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</template>)",
				patterns: [
					{
						include: "text.haml"
					}
				]
			}
		]
	},
	{
		begin: "(<)(template)\\b(?=[^>]*lang=('slim'|\"slim\"))(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.template.html"
			}
		},
		end: "(</)(template)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.template.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "text.slim",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</template>)",
				patterns: [
					{
						include: "text.slim"
					}
				]
			}
		]
	},
	{
		begin: "(<)(template)\\b(?=[^>]*lang=('slm'|\"slm\"))(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.template.html"
			}
		},
		end: "(</)(template)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.template.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "text.jade.slm",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</template>)",
				patterns: [
					{
						include: "text.jade.slm"
					}
				]
			}
		]
	},
	{
		begin: "(<)(template)\\b(?=[^>]*lang=('liquid'|\"liquid\"))(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.template.html"
			}
		},
		end: "(</)(template)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.template.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "text.html.liquid",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</template>)",
				patterns: [
					{
						include: "text.html.liquid"
					}
				]
			}
		]
	},
	{
		begin: "(<)(template)(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.template.html"
			}
		},
		end: "^(</)(template)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.template.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "text.html.vue-html",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=^</template>)",
				patterns: [
					{
						include: "text.html.vue-html"
					}
				]
			}
		]
	},
	{
		begin: "(<)(style)\\b(?=[^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			}
		},
		end: "(/>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			}
		]
	},
	{
		begin: "(<)(style)(?=[^>]*>[^/>]*</style>)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			}
		},
		end: "(</)(style)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</style>)"
			}
		]
	},
	{
		begin: "(<)(style)\\b(?=[^>]*lang=('sass'|\"sass\"))(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			}
		},
		end: "(</)(style)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "source.sass",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</style>)",
				patterns: [
					{
						include: "source.sass"
					}
				]
			}
		]
	},
	{
		begin: "(<)(style)\\b(?=[^>]*lang=('scss'|\"scss\"))(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			}
		},
		end: "(</)(style)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "source.css.scss",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</style>)",
				patterns: [
					{
						include: "source.css.scss"
					}
				]
			}
		]
	},
	{
		begin: "(<)(style)\\b(?=[^>]*lang=('less'|\"less\"))(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			}
		},
		end: "(</)(style)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "source.css.less",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</style>)",
				patterns: [
					{
						include: "source.css.less"
					}
				]
			}
		]
	},
	{
		begin: "(<)(style)\\b(?=[^>]*lang=('stylus'|\"stylus\"))(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			}
		},
		end: "(</)(style)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "source.stylus",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</style>)",
				patterns: [
					{
						include: "source.stylus"
					}
				]
			}
		]
	},
	{
		begin: "(<)(style)\\b(?=[^>]*lang=('postcss'|\"postcss\"))(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			}
		},
		end: "(</)(style)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "source.css.postcss",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</style>)",
				patterns: [
					{
						include: "source.css.postcss"
					}
				]
			}
		]
	},
	{
		begin: "(<)(style)\\b(?=[^>]*lang=(['\"]sss['\"]))(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			}
		},
		end: "(</)(style)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "source.css.sugarss",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</style>)",
				patterns: [
					{
						include: "source.css.sugarss"
					}
				]
			}
		]
	},
	{
		begin: "(<)(style)(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			}
		},
		end: "(</)(style)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.style.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "source.css",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</style>)",
				patterns: [
					{
						include: "source.css"
					}
				]
			}
		]
	},
	{
		begin: "(<)(script)\\b(?=[^>]*/>$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.script.html"
			}
		},
		end: "(/>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			}
		]
	},
	{
		begin: "(<)(script)(?=[^>]*>[^/>]*</script>)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.script.html"
			}
		},
		end: "(</)(script)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.script.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</script>)"
			}
		]
	},
	{
		begin: "(<)(script)\\b(?=[^>]*lang=('ts'|\"ts\"))(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.script.html"
			}
		},
		end: "(</)(script)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.script.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "source.ts",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</script>)",
				patterns: [
					{
						include: "source.ts"
					}
				]
			}
		]
	},
	{
		begin: "(<)(script)\\b(?=[^>]*lang=('coffee'|\"coffee\"))(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.script.html"
			}
		},
		end: "(</)(script)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.script.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "source.coffee",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</script>)",
				patterns: [
					{
						include: "source.coffee"
					}
				]
			}
		]
	},
	{
		begin: "(<)(script)(?![^/>]*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.script.html"
			}
		},
		end: "(</)(script)(>)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.tag.begin.html"
			},
			"2": {
				name: "entity.name.tag.script.html"
			},
			"3": {
				name: "punctuation.definition.tag.end.html"
			}
		},
		patterns: [
			{
				include: "#tag-stuff"
			},
			{
				contentName: "source.js",
				begin: "(>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.end.html"
					}
				},
				end: "(?=</script>)",
				patterns: [
					{
						include: "source.js"
					}
				]
			}
		]
	}
];
const repository = {
	entities: {
		patterns: [
			{
				name: "constant.character.entity.html",
				match: "(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)",
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"3": {
						name: "punctuation.definition.entity.html"
					}
				}
			},
			{
				name: "invalid.illegal.bad-ampersand.html",
				match: "&"
			}
		]
	},
	"string-double-quoted": {
		name: "string.quoted.double.html",
		begin: "\"",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.html"
			}
		},
		end: "\"",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.html"
			}
		},
		patterns: [
			{
				include: "#vue-interpolations"
			},
			{
				include: "#entities"
			}
		]
	},
	"string-single-quoted": {
		name: "string.quoted.single.html",
		begin: "'",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.html"
			}
		},
		end: "'",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.html"
			}
		},
		patterns: [
			{
				include: "#vue-interpolations"
			},
			{
				include: "#entities"
			}
		]
	},
	"tag-generic-attribute": {
		name: "entity.other.attribute-name.html",
		match: "\\b([a-zA-Z\\-:_]+)"
	},
	"tag-id-attribute": {
		name: "meta.attribute-with-value.id.html",
		begin: "\\b(id)\\b\\s*(=)",
		end: "(?<='|\")",
		captures: {
			"1": {
				name: "entity.other.attribute-name.id.html"
			},
			"2": {
				name: "punctuation.separator.key-value.html"
			}
		},
		patterns: [
			{
				name: "string.quoted.double.html",
				contentName: "meta.toc-list.id.html",
				begin: "\"",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.begin.html"
					}
				},
				end: "\"",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.end.html"
					}
				},
				patterns: [
					{
						include: "#vue-interpolations"
					},
					{
						include: "#entities"
					}
				]
			},
			{
				name: "string.quoted.single.html",
				contentName: "meta.toc-list.id.html",
				begin: "'",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.begin.html"
					}
				},
				end: "'",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.end.html"
					}
				},
				patterns: [
					{
						include: "#vue-interpolations"
					},
					{
						include: "#entities"
					}
				]
			}
		]
	},
	"tag-stuff": {
		patterns: [
			{
				include: "#vue-directives"
			},
			{
				include: "#tag-id-attribute"
			},
			{
				include: "#tag-generic-attribute"
			},
			{
				include: "#string-double-quoted"
			},
			{
				include: "#string-single-quoted"
			}
		]
	},
	"vue-directives": {
		name: "meta.directive.vue",
		begin: "(?:\\b(v-)|(:|@|#))([a-zA-Z0-9\\-_]+)(?:\\:([a-zA-Z\\-_]+))?(?:\\.([a-zA-Z\\-_]+))*\\s*(=)",
		end: "(?<='|\")|(?=[\\s<>`])",
		captures: {
			"1": {
				name: "entity.other.attribute-name.html"
			},
			"2": {
				name: "punctuation.separator.key-value.html"
			},
			"3": {
				name: "entity.other.attribute-name.html"
			},
			"4": {
				name: "entity.other.attribute-name.html"
			},
			"5": {
				name: "entity.other.attribute-name.html"
			},
			"6": {
				name: "punctuation.separator.key-value.html"
			}
		},
		patterns: [
			{
				name: "source.directive.vue",
				begin: "`",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.begin.html"
					}
				},
				end: "`",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.end.html"
					}
				},
				patterns: [
					{
						include: "source.js#expression"
					}
				]
			},
			{
				name: "source.directive.vue",
				begin: "\"",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.begin.html"
					}
				},
				end: "\"",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.end.html"
					}
				},
				patterns: [
					{
						include: "source.js#expression"
					}
				]
			},
			{
				name: "source.directive.vue",
				begin: "'",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.begin.html"
					}
				},
				end: "'",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.end.html"
					}
				},
				patterns: [
					{
						include: "source.js#expression"
					}
				]
			}
		]
	},
	"vue-interpolations": {
		patterns: [
			{
				name: "expression.embedded.vue",
				begin: "\\{\\{\\{?",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.generic.begin.html"
					}
				},
				end: "\\}\\}\\}?",
				endCaptures: {
					"0": {
						name: "punctuation.definition.generic.end.html"
					}
				},
				patterns: [
					{
						include: "source.js#expression"
					}
				]
			}
		]
	}
};
const vue_tmLanguage = {
	name: name,
	scopeName: scopeName,
	fileTypes: fileTypes,
	uuid: uuid,
	patterns: patterns,
	repository: repository
};

export { vue_tmLanguage as default, fileTypes, name, patterns, repository, scopeName, uuid };
