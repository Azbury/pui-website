const information_for_contributors = [
	"This file has been converted from https://github.com/jlelong/vscode-latex-basics/blob/master/syntaxes/LaTeX.tmLanguage.json",
	"If you want to provide a fix or improvement, please create a pull request against the original repository.",
	"Once accepted there, we are happy to receive an update request."
];
const version = "https://github.com/jlelong/vscode-latex-basics/commit/6fc051150e918f8e5df7b102977d8d72eedf66f6";
const name = "latex";
const scopeName = "text.tex.latex";
const patterns = [
	{
		comment: "This scope identifies partially typed commands such as `\\tab`. We use this to trigger “Command Completion” only when it makes sense.",
		match: "(?<=\\\\[\\w@]|\\\\[\\w@]{2}|\\\\[\\w@]{3}|\\\\[\\w@]{4}|\\\\[\\w@]{5}|\\\\[\\w@]{6})\\s",
		name: "meta.space-after-command.latex"
	},
	{
		begin: "((\\\\)(?:usepackage|documentclass))((?:\\[[^\\[]*?\\])*)(\\{)",
		beginCaptures: {
			"1": {
				name: "keyword.control.preamble.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				patterns: [
					{
						include: "#optional-arg"
					}
				]
			},
			"4": {
				name: "punctuation.definition.arguments.begin.latex"
			}
		},
		contentName: "support.class.latex",
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.arguments.end.latex"
			}
		},
		name: "meta.preamble.latex",
		patterns: [
			{
				include: "$self"
			}
		]
	},
	{
		begin: "((\\\\)(?:include|input))(\\{)",
		beginCaptures: {
			"1": {
				name: "keyword.control.include.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				name: "punctuation.definition.arguments.begin.latex"
			}
		},
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.arguments.end.latex"
			}
		},
		name: "meta.include.latex",
		patterns: [
			{
				include: "$self"
			}
		]
	},
	{
		begin: "((\\\\)((?:sub){0,2}section|(?:sub)?paragraph|chapter|part|addpart|addchap|addsec|minisec|frametitle)(?:\\*)?)((?:\\[[^\\[]*?\\]){0,2})(\\{)",
		beginCaptures: {
			"1": {
				name: "support.function.section.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"4": {
				patterns: [
					{
						include: "#optional-arg"
					}
				]
			},
			"5": {
				name: "punctuation.definition.arguments.begin.latex"
			}
		},
		comment: "this works OK with all kinds of crazy stuff as long as section is one line",
		contentName: "entity.name.section.latex",
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.arguments.end.latex"
			}
		},
		name: "meta.function.section.$3.latex",
		patterns: [
			{
				include: "text.tex#braces"
			},
			{
				include: "$base"
			}
		]
	},
	{
		name: "meta.function.environment.songs.latex",
		begin: "((?:\\s*)\\\\begin\\{songs\\}\\{.*\\})",
		end: "(\\\\end\\{songs\\}(?:\\s*\\n)?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "meta.data.environment.songs.latex",
		patterns: [
			{
				name: "meta.chord.block.latex support.class.chord.block.environment.latex",
				begin: "\\\\\\[",
				end: "\\]",
				patterns: [
					{
						include: "$base"
					}
				]
			},
			{
				name: "meta.chord.block.latex support.class.chord.block.environment.latex",
				match: "\\^"
			},
			{
				include: "$self"
			}
		]
	},
	{
		begin: "(^\\s*)?(?=\\\\begin\\{(lstlisting|minted|pyglist)\\})",
		beginCaptures: {
			"0": {
				name: "punctuation.whitespace.embedded.leading.latex"
			}
		},
		end: "(?!\\G)(\\s*$\\n?)?",
		endCaptures: {
			"0": {
				name: "punctuation.whitespace.embedded.trailing.latex"
			}
		},
		patterns: [
			{
				begin: "(\\\\begin\\{minted\\}(?:\\[.*\\])?\\{(?:c|cpp)\\})",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "source.cpp.embedded.latex",
				patterns: [
					{
						include: "source.cpp.embedded.latex"
					}
				],
				end: "(\\\\end\\{minted\\})"
			},
			{
				begin: "(\\\\begin\\{minted\\}(?:\\[.*\\])?\\{(?:asy|asymptote)\\})",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "source.asy",
				patterns: [
					{
						include: "source.asy"
					}
				],
				end: "(\\\\end\\{minted\\})"
			},
			{
				begin: "(\\\\begin\\{minted\\}(?:\\[.*\\])?\\{(?:css)\\})",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "source.css",
				patterns: [
					{
						include: "source.css"
					}
				],
				end: "(\\\\end\\{minted\\})"
			},
			{
				begin: "(\\\\begin\\{minted\\}(?:\\[.*\\])?\\{(?:hs|haskell)\\})",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "source.haskell",
				patterns: [
					{
						include: "source.haskell"
					}
				],
				end: "(\\\\end\\{minted\\})"
			},
			{
				begin: "(\\\\begin\\{minted\\}(?:\\[.*\\])?\\{(?:html)\\})",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "text.html",
				patterns: [
					{
						include: "text.html.basic"
					}
				],
				end: "(\\\\end\\{minted\\})"
			},
			{
				begin: "(\\\\begin\\{minted\\}(?:\\[.*\\])?\\{(?:xml)\\})",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "text.xml",
				patterns: [
					{
						include: "text.xml"
					}
				],
				end: "(\\\\end\\{minted\\})"
			},
			{
				begin: "(\\\\begin\\{minted\\}(?:\\[.*\\])?\\{(?:java)\\})",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "source.java",
				patterns: [
					{
						include: "source.java"
					}
				],
				end: "(\\\\end\\{minted\\})"
			},
			{
				begin: "(\\\\begin\\{minted\\}(?:\\[.*\\])?\\{(?:lua)\\})",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "source.lua",
				patterns: [
					{
						include: "source.lua"
					}
				],
				end: "(\\\\end\\{minted\\})"
			},
			{
				begin: "(\\\\begin\\{minted\\}(?:\\[.*\\])?\\{(?:jl|julia)\\})",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "source.julia",
				patterns: [
					{
						include: "source.julia"
					}
				],
				end: "(\\\\end\\{minted\\})"
			},
			{
				begin: "(\\\\begin\\{minted\\}(?:\\[.*\\])?\\{(?:rb|ruby)\\})",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "source.ruby",
				patterns: [
					{
						include: "source.ruby"
					}
				],
				end: "(\\\\end\\{minted\\})"
			},
			{
				begin: "(\\\\begin\\{minted\\}(?:\\[.*\\])?\\{(?:js|javascript)\\})",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "source.js",
				patterns: [
					{
						include: "source.js"
					}
				],
				end: "(\\\\end\\{minted\\})"
			},
			{
				begin: "(\\\\begin\\{minted\\}(?:\\[.*\\])?\\{(?:ts|typescript)\\})",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "source.ts",
				patterns: [
					{
						include: "source.ts"
					}
				],
				end: "(\\\\end\\{minted\\})"
			},
			{
				begin: "(\\\\begin\\{minted\\}(?:\\[.*\\])?\\{(?:py|python)\\})",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "source.python",
				patterns: [
					{
						include: "source.python"
					}
				],
				end: "(\\\\end\\{minted\\})"
			},
			{
				begin: "(\\\\begin\\{minted\\}(?:\\[.*\\])?\\{(?:yaml)\\})",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "source.yaml",
				patterns: [
					{
						include: "source.yaml"
					}
				],
				end: "(\\\\end\\{minted\\})"
			},
			{
				begin: "(\\\\begin\\{(?:lstlisting|minted|pyglist)\\}(?:\\[.*\\])?)",
				captures: {
					"1": {
						patterns: [
							{
								include: "#begin-env-tokenizer"
							}
						]
					}
				},
				contentName: "meta.function.embedded.latex",
				end: "(\\\\end\\{(?:lstlisting|minted|pyglist)\\})",
				name: "meta.embedded.block.generic.latex"
			}
		]
	},
	{
		begin: "(\\s*\\\\begin\\{((?:cppcode)\\*?)\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "source.cpp.embedded.latex",
		patterns: [
			{
				include: "source.cpp.embedded.latex"
			}
		],
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)"
	},
	{
		begin: "(\\s*\\\\begin\\{((?:hscode)\\*?)\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "source.haskell",
		patterns: [
			{
				include: "source.haskell"
			}
		],
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)"
	},
	{
		begin: "(\\s*\\\\begin\\{((?:luacode)\\*?)\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "source.lua",
		patterns: [
			{
				include: "source.lua"
			}
		],
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)"
	},
	{
		begin: "(\\s*\\\\begin\\{((?:jlcode|jlverbatim|jlblock|jlconcode|jlconsole|jlconverbatim)\\*?)\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "source.julia",
		patterns: [
			{
				include: "source.julia"
			}
		],
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)"
	},
	{
		begin: "(\\s*\\\\begin\\{((?:juliacode|juliaverbatim|juliablock|juliaconcode|juliaconsole|juliaconverbatim)\\*?)\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "source.julia",
		patterns: [
			{
				include: "source.julia"
			}
		],
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)"
	},
	{
		begin: "(\\s*\\\\begin\\{((?:sageblock|sagesilent|sageverbatim|sageexample|sagecommandline|python|pythonq|pythonrepl)\\*?)\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "source.python",
		patterns: [
			{
				include: "source.python"
			}
		],
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)"
	},
	{
		begin: "(\\s*\\\\begin\\{((?:pycode|pyverbatim|pyblock|pyconcode|pyconsole|pyconverbatim)\\*?)\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "source.python",
		patterns: [
			{
				include: "source.python"
			}
		],
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)"
	},
	{
		begin: "(\\s*\\\\begin\\{((?:pylabcode|pylabverbatim|pylabblock|pylabconcode|pylabconsole|pylabconverbatim)\\*?)\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "source.python",
		patterns: [
			{
				include: "source.python"
			}
		],
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)"
	},
	{
		begin: "(\\s*\\\\begin\\{((?:sympycode|sympyverbatim|sympyblock|sympyconcode|sympyconsole|sympyconverbatim)\\*?)\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "source.python",
		patterns: [
			{
				include: "source.python"
			}
		],
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)"
	},
	{
		begin: "(\\s*\\\\begin\\{((?:scalacode)\\*?)\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "source.scala",
		patterns: [
			{
				include: "source.scala"
			}
		],
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)"
	},
	{
		begin: "(\\s*\\\\begin\\{((?:asy|asycode)\\*?)\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "source.asymptote",
		patterns: [
			{
				include: "source.asymptote"
			}
		],
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)"
	},
	{
		begin: "(\\s*\\\\begin\\{((?:dot2tex|dotcode)\\*?)\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "source.dot",
		patterns: [
			{
				include: "source.dot"
			}
		],
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)"
	},
	{
		begin: "(\\s*\\\\begin\\{((?:gnuplot)\\*?)\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "source.gnuplot",
		patterns: [
			{
				include: "source.gnuplot"
			}
		],
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)"
	},
	{
		begin: "((?:\\s*)\\\\begin\\{([a-z]*code(?:\\*)?)\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)"
	},
	{
		begin: "((\\\\)addplot)(?:\\+?)((?:\\[[^\\[]*\\]))*\\s*(gnuplot)\\s*((?:\\[[^\\[]*\\]))*\\s*(\\{)",
		captures: {
			"1": {
				name: "support.function.be.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				patterns: [
					{
						include: "#optional-arg"
					}
				]
			},
			"4": {
				name: "variable.parameter.function.latex"
			},
			"5": {
				patterns: [
					{
						include: "#optional-arg"
					}
				]
			},
			"6": {
				name: "punctuation.definition.arguments.begin.latex"
			}
		},
		patterns: [
			{
				begin: "%",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.comment.latex"
					}
				},
				end: "$\\n?",
				name: "comment.line.percentage.latex"
			},
			{
				include: "source.gnuplot"
			}
		],
		end: "\\s*(\\};)"
	},
	{
		begin: "(\\s*\\\\begin\\{((?:fboxv|boxedv|V|v|spv)erbatim\\*?)\\})",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "markup.raw.verbatim.latex",
		end: "(\\\\end\\{\\2\\})",
		name: "meta.function.verbatim.latex"
	},
	{
		begin: "(\\s*\\\\begin\\{VerbatimOut\\}\\{[^\\}]*\\})",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "markup.raw.verbatim.latex",
		end: "(\\\\end\\{\\VerbatimOut\\})",
		name: "meta.function.verbatim.latex"
	},
	{
		begin: "(\\s*\\\\begin\\{alltt\\})",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "markup.raw.verbatim.latex",
		end: "(\\\\end\\{alltt\\})",
		name: "meta.function.alltt.latex",
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.function.latex"
					}
				},
				match: "(\\\\)[A-Za-z]+",
				name: "support.function.general.latex"
			}
		]
	},
	{
		begin: "(\\s*\\\\begin\\{([Cc]omment)\\})",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "punctuation.definition.comment.latex",
		end: "(\\\\end\\{\\2\\})",
		name: "meta.function.verbatim.latex"
	},
	{
		captures: {
			"1": {
				name: "support.function.url.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				name: "punctuation.definition.arguments.begin.latex"
			},
			"4": {
				name: "markup.underline.link.latex"
			},
			"5": {
				name: "punctuation.definition.arguments.end.latex"
			}
		},
		match: "(?:\\s*)((\\\\)(?:url|href))(\\{)([^}]*)(\\})",
		name: "meta.function.link.url.latex"
	},
	{
		comment: "These two patterns match the \\begin{document} and \\end{document} commands, so that the environment matching pattern following them will ignore those commands.",
		match: "(\\s*\\\\begin\\{document\\})",
		name: "meta.function.begin-document.latex",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		}
	},
	{
		match: "(\\s*\\\\end\\{document\\})",
		name: "meta.function.end-document.latex",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		}
	},
	{
		begin: "(?:\\s*)((\\\\)begin)(\\{)((?:array|equation|(?:IEEE)?eqnarray|multline|align|aligned|alignat|alignedat|flalign|flaligned|flalignat|split|gather|gathered|cases|(?:display)?math|[a-zA-Z]*matrix|[pbBvV]?NiceMatrix|[pbBvV]?NiceArray|(?:(?:arg)?(?:mini|maxi)))(?:\\*|!)?)(\\})(\\s*\\n)?",
		captures: {
			"1": {
				name: "support.function.be.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				name: "punctuation.definition.arguments.begin.latex"
			},
			"4": {
				name: "variable.parameter.function.latex"
			},
			"5": {
				name: "punctuation.definition.arguments.end.latex"
			}
		},
		contentName: "meta.math.block.latex support.class.math.block.environment.latex",
		end: "(?:\\s*)((\\\\)end)(\\{)(\\4)(\\})(?:\\s*\\n)?",
		name: "meta.function.environment.math.latex",
		patterns: [
			{
				match: "(?<!\\\\)&",
				name: "keyword.control.equation.align.latex"
			},
			{
				match: "\\\\\\\\",
				name: "keyword.control.equation.newline.latex"
			},
			{
				include: "#definition-label"
			},
			{
				include: "text.tex#math"
			},
			{
				include: "$base"
			}
		]
	},
	{
		begin: "(?:\\s*)(\\\\begin\\{empheq\\}(?:\\[.*\\])?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "meta.math.block.latex support.class.math.block.environment.latex",
		end: "(?:\\s*)(\\\\end\\{empheq\\})",
		name: "meta.function.environment.math.latex",
		patterns: [
			{
				match: "(?<!\\\\)&",
				name: "keyword.control.equation.align.latex"
			},
			{
				match: "\\\\\\\\",
				name: "keyword.control.equation.newline.latex"
			},
			{
				include: "#definition-label"
			},
			{
				include: "text.tex#math"
			},
			{
				include: "$base"
			}
		]
	},
	{
		begin: "(\\s*\\\\begin\\{(tabular[xy*]?|xltabular|longtable|(?:long)?tabu|(?:long|tall)?tblr|NiceTabular[X*]?)\\}(\\s*\\n)?)",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		contentName: "meta.data.environment.tabular.latex",
		end: "(\\s*\\\\end\\{(\\2)\\}(?:\\s*\\n)?)",
		name: "meta.function.environment.tabular.latex",
		patterns: [
			{
				match: "(?<!\\\\)&",
				name: "keyword.control.table.cell.latex"
			},
			{
				match: "\\\\\\\\",
				name: "keyword.control.table.newline.latex"
			},
			{
				include: "$base"
			}
		]
	},
	{
		begin: "(\\s*\\\\begin\\{(itemize|enumerate|description|list)\\})",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)",
		name: "meta.function.environment.list.latex",
		patterns: [
			{
				include: "$base"
			}
		]
	},
	{
		begin: "(\\s*\\\\begin\\{tikzpicture\\})",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		end: "(\\\\end\\{tikzpicture\\}(?:\\s*\\n)?)",
		name: "meta.function.environment.latex.tikz",
		patterns: [
			{
				include: "$base"
			}
		]
	},
	{
		begin: "(\\s*\\\\begin\\{frame\\})",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		end: "(\\\\end\\{frame\\})",
		name: "meta.function.environment.frame.latex",
		patterns: [
			{
				include: "$base"
			}
		]
	},
	{
		begin: "(\\s*\\\\begin\\{(mpost\\*?)\\})",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)",
		name: "meta.function.environment.latex.mpost"
	},
	{
		begin: "(\\s*\\\\begin\\{markdown\\})",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		end: "(\\\\end\\{markdown\\})",
		contentName: "meta.embedded.markdown_latex_combined",
		patterns: [
			{
				include: "text.tex.markdown_latex_combined"
			}
		]
	},
	{
		begin: "(\\s*\\\\begin\\{(\\w+\\*?)\\})",
		captures: {
			"1": {
				patterns: [
					{
						include: "#begin-env-tokenizer"
					}
				]
			}
		},
		end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)",
		name: "meta.function.environment.general.latex",
		patterns: [
			{
				include: "$base"
			}
		]
	},
	{
		captures: {
			"1": {
				name: "storage.type.function.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				name: "punctuation.definition.begin.latex"
			},
			"4": {
				name: "support.function.general.latex"
			},
			"5": {
				name: "punctuation.definition.function.latex"
			},
			"6": {
				name: "punctuation.definition.end.latex"
			}
		},
		match: "((\\\\)(?:newcommand|renewcommand|(?:re)?newrobustcmd|DeclareRobustCommand))\\*?({)((\\\\)[^}]*)(})"
	},
	{
		begin: "((\\\\)marginpar)((?:\\[[^\\[]*?\\])*)(\\{)",
		beginCaptures: {
			"1": {
				name: "support.function.marginpar.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				patterns: [
					{
						include: "#optional-arg"
					}
				]
			},
			"4": {
				name: "punctuation.definition.marginpar.begin.latex"
			}
		},
		contentName: "meta.paragraph.margin.latex",
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.marginpar.end.latex"
			}
		},
		patterns: [
			{
				include: "text.tex#braces"
			},
			{
				include: "$base"
			}
		]
	},
	{
		begin: "((\\\\)footnote)((?:\\[[^\\[]*?\\])*)(\\{)",
		beginCaptures: {
			"1": {
				name: "support.function.footnote.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				patterns: [
					{
						include: "#optional-arg"
					}
				]
			},
			"4": {
				name: "punctuation.definition.footnote.begin.latex"
			}
		},
		contentName: "entity.name.footnote.latex",
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.footnote.end.latex"
			}
		},
		patterns: [
			{
				include: "text.tex#braces"
			},
			{
				include: "$base"
			}
		]
	},
	{
		begin: "((\\\\)emph)(\\{)",
		beginCaptures: {
			"1": {
				name: "support.function.emph.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				name: "punctuation.definition.emph.begin.latex"
			}
		},
		contentName: "markup.italic.emph.latex",
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.emph.end.latex"
			}
		},
		name: "meta.function.emph.latex",
		patterns: [
			{
				include: "text.tex#braces"
			},
			{
				include: "$base"
			}
		]
	},
	{
		begin: "((\\\\)textit)(\\{)",
		captures: {
			"1": {
				name: "support.function.textit.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				name: "punctuation.definition.textit.begin.latex"
			}
		},
		comment: "We put the keyword in a capture and name this capture, so that disabling spell checking for “keyword” won't be inherited by the argument to \\textit{...}.\n\nPut specific matches for particular LaTeX keyword.functions before the last two more general functions",
		contentName: "markup.italic.textit.latex",
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.textit.end.latex"
			}
		},
		name: "meta.function.textit.latex",
		patterns: [
			{
				include: "text.tex#braces"
			},
			{
				include: "$base"
			}
		]
	},
	{
		begin: "((\\\\)textbf)(\\{)",
		captures: {
			"1": {
				name: "support.function.textbf.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				name: "punctuation.definition.textbf.begin.latex"
			}
		},
		contentName: "markup.bold.textbf.latex",
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.textbf.end.latex"
			}
		},
		name: "meta.function.textbf.latex",
		patterns: [
			{
				include: "text.tex#braces"
			},
			{
				include: "$base"
			}
		]
	},
	{
		begin: "((\\\\)texttt)(\\{)",
		captures: {
			"1": {
				name: "support.function.texttt.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				name: "punctuation.definition.texttt.begin.latex"
			}
		},
		contentName: "markup.raw.texttt.latex",
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.texttt.end.latex"
			}
		},
		name: "meta.function.texttt.latex",
		patterns: [
			{
				include: "text.tex#braces"
			},
			{
				include: "$base"
			}
		]
	},
	{
		captures: {
			"0": {
				name: "keyword.other.item.latex"
			},
			"1": {
				name: "punctuation.definition.keyword.latex"
			}
		},
		match: "(\\\\)item\\b",
		name: "meta.scope.item.latex"
	},
	{
		begin: "((\\\\)(?:[aA]uto|foot|full|no|short|[tT]ext|[pP]aren|[sS]mart)?[cC]ite(?:al)?(?:p|s|t|author|year(?:par)?|title)?[ANP]*\\*?)((?:(?:\\([^\\)]*\\)){0,2}(?:\\[[^\\]]*\\]){0,2}\\{[\\w:.]*\\})*)(?:([<\\[])[^\\]<>]*([>\\]]))?(?:(\\[)[^\\]]*(\\]))?(\\{)",
		captures: {
			"1": {
				name: "keyword.control.cite.latex"
			},
			"2": {
				name: "punctuation.definition.keyword.latex"
			},
			"3": {
				patterns: [
					{
						include: "#autocites-arg"
					}
				]
			},
			"4": {
				name: "punctuation.definition.arguments.optional.begin.latex"
			},
			"5": {
				name: "punctuation.definition.arguments.optional.end.latex"
			},
			"6": {
				name: "punctuation.definition.arguments.optional.begin.latex"
			},
			"7": {
				name: "punctuation.definition.arguments.optional.end.latex"
			},
			"8": {
				name: "punctuation.definition.arguments.begin.latex"
			}
		},
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.arguments.end.latex"
			}
		},
		name: "meta.citation.latex",
		patterns: [
			{
				captures: {
					"1": {
						name: "comment.line.percentage.tex"
					},
					"2": {
						name: "punctuation.definition.comment.tex"
					}
				},
				match: "((%).*)$"
			},
			{
				match: "[\\w:.-]+",
				name: "constant.other.reference.citation.latex"
			}
		]
	},
	{
		begin: "((\\\\)bibentry)(\\{)",
		captures: {
			"1": {
				name: "keyword.control.cite.latex"
			},
			"2": {
				name: "punctuation.definition.keyword.latex"
			},
			"3": {
				name: "punctuation.definition.arguments.begin.latex"
			}
		},
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.arguments.end.latex"
			}
		},
		name: "meta.citation.latex",
		patterns: [
			{
				match: "[\\w:.]+",
				name: "constant.other.reference.citation.latex"
			}
		]
	},
	{
		begin: "((\\\\)(?:\\w*[rR]ef\\*?))(\\{)",
		beginCaptures: {
			"1": {
				name: "keyword.control.ref.latex"
			},
			"2": {
				name: "punctuation.definition.keyword.latex"
			},
			"3": {
				name: "punctuation.definition.arguments.begin.latex"
			}
		},
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.arguments.end.latex"
			}
		},
		name: "meta.reference.label.latex",
		patterns: [
			{
				match: "[a-zA-Z0-9\\.,:/*!^_-]",
				name: "constant.other.reference.label.latex"
			}
		]
	},
	{
		include: "#definition-label"
	},
	{
		begin: "((\\\\)(?:verb|Verb|spverb)\\*?)\\s*((\\\\)scantokens)(\\{)",
		beginCaptures: {
			"1": {
				name: "support.function.verb.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				name: "support.function.verb.latex"
			},
			"4": {
				name: "punctuation.definition.verb.latex"
			},
			"5": {
				name: "punctuation.definition.begin.latex"
			}
		},
		contentName: "markup.raw.verb.latex",
		end: "(\\})",
		endCaptures: {
			"1": {
				name: "punctuation.definition.end.latex"
			}
		},
		name: "meta.function.verb.latex",
		patterns: [
			{
				include: "$self"
			}
		]
	},
	{
		captures: {
			"1": {
				name: "support.function.verb.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				name: "punctuation.definition.verb.latex"
			},
			"4": {
				name: "markup.raw.verb.latex"
			},
			"5": {
				name: "punctuation.definition.verb.latex"
			}
		},
		match: "((\\\\)(?:verb|Verb|spverb)\\*?)\\s*((?<=\\s)\\S|[^a-zA-Z])(.*?)(\\3|$)",
		name: "meta.function.verb.latex"
	},
	{
		captures: {
			"1": {
				name: "support.function.verb.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				patterns: [
					{
						include: "#optional-arg"
					}
				]
			},
			"4": {
				name: "punctuation.definition.arguments.begin.latex"
			},
			"5": {
				name: "punctuation.definition.arguments.end.latex"
			},
			"6": {
				name: "punctuation.definition.verb.latex"
			},
			"7": {
				name: "markup.raw.verb.latex"
			},
			"8": {
				name: "punctuation.definition.verb.latex"
			},
			"9": {
				name: "punctuation.definition.verb.latex"
			},
			"10": {
				name: "markup.raw.verb.latex"
			},
			"11": {
				name: "punctuation.definition.verb.latex"
			}
		},
		match: "((\\\\)(?:mint|mintinline))((?:\\[[^\\[]*?\\])?)(\\{)[a-zA-Z]*(\\})(?:(?:([^a-zA-Z\\{])(.*?)(\\6))|(?:(\\{)(.*?)(\\})))",
		name: "meta.function.verb.latex"
	},
	{
		captures: {
			"1": {
				name: "support.function.verb.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				patterns: [
					{
						include: "#optional-arg"
					}
				]
			},
			"4": {
				name: "punctuation.definition.verb.latex"
			},
			"5": {
				name: "markup.raw.verb.latex"
			},
			"6": {
				name: "punctuation.definition.verb.latex"
			},
			"7": {
				name: "punctuation.definition.verb.latex"
			},
			"8": {
				name: "markup.raw.verb.latex"
			},
			"9": {
				name: "punctuation.definition.verb.latex"
			}
		},
		match: "((\\\\)[a-z]+inline)((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",
		name: "meta.function.verb.latex"
	},
	{
		captures: {
			"1": {
				name: "support.function.verb.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				patterns: [
					{
						include: "#optional-arg"
					}
				]
			},
			"4": {
				name: "punctuation.definition.verb.latex"
			},
			"5": {
				name: "source.python",
				patterns: [
					{
						include: "source.python"
					}
				]
			},
			"6": {
				name: "punctuation.definition.verb.latex"
			},
			"7": {
				name: "punctuation.definition.verb.latex"
			},
			"8": {
				name: "source.python",
				patterns: [
					{
						include: "source.python"
					}
				]
			},
			"9": {
				name: "punctuation.definition.verb.latex"
			}
		},
		match: "((\\\\)(?:(?:py|pycon|pylab|pylabcon|sympy|sympycon)[cv]?|pyq|pycq|pyif))((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",
		name: "meta.function.verb.latex"
	},
	{
		captures: {
			"1": {
				name: "support.function.verb.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				patterns: [
					{
						include: "#optional-arg"
					}
				]
			},
			"4": {
				name: "punctuation.definition.verb.latex"
			},
			"5": {
				name: "source.julia",
				patterns: [
					{
						include: "source.julia"
					}
				]
			},
			"6": {
				name: "punctuation.definition.verb.latex"
			},
			"7": {
				name: "punctuation.definition.verb.latex"
			},
			"8": {
				name: "source.julia",
				patterns: [
					{
						include: "source.julia"
					}
				]
			},
			"9": {
				name: "punctuation.definition.verb.latex"
			}
		},
		match: "((\\\\)(?:jl|julia)[cv]?)((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",
		name: "meta.function.verb.latex"
	},
	{
		match: "\\\\(?:newline|pagebreak|clearpage|linebreak|pause)(?:\\b)",
		name: "keyword.control.layout.latex"
	},
	{
		begin: "\\\\\\(",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.latex"
			}
		},
		end: "\\\\\\)",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.latex"
			}
		},
		name: "meta.math.block.latex support.class.math.block.environment.latex",
		patterns: [
			{
				include: "text.tex#math"
			},
			{
				include: "$base"
			}
		]
	},
	{
		begin: "\\$\\$",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.latex"
			}
		},
		end: "\\$\\$",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.latex"
			}
		},
		name: "meta.math.block.latex support.class.math.block.environment.latex",
		patterns: [
			{
				match: "\\\\\\$",
				name: "constant.character.escape.latex"
			},
			{
				include: "text.tex#math"
			},
			{
				include: "$base"
			}
		]
	},
	{
		begin: "\\$",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.tex"
			}
		},
		end: "\\$",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.tex"
			}
		},
		name: "meta.math.block.tex support.class.math.block.tex",
		patterns: [
			{
				match: "\\\\\\$",
				name: "constant.character.escape.latex"
			},
			{
				include: "text.tex#math"
			},
			{
				include: "$base"
			}
		]
	},
	{
		begin: "\\\\\\[",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.latex"
			}
		},
		end: "\\\\\\]",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.latex"
			}
		},
		name: "meta.math.block.latex support.class.math.block.environment.latex",
		patterns: [
			{
				include: "text.tex#math"
			},
			{
				include: "$base"
			}
		]
	},
	{
		captures: {
			"1": {
				name: "punctuation.definition.constant.latex"
			}
		},
		match: "(\\\\)(text(s(terling|ixoldstyle|urd|e(ction|venoldstyle|rvicemark))|yen|n(ineoldstyle|umero|aira)|c(ircledP|o(py(left|right)|lonmonetary)|urrency|e(nt(oldstyle)?|lsius))|t(hree(superior|oldstyle|quarters(emdash)?)|i(ldelow|mes)|w(o(superior|oldstyle)|elveudash)|rademark)|interrobang(down)?|zerooldstyle|o(hm|ne(superior|half|oldstyle|quarter)|penbullet|rd(feminine|masculine))|d(i(scount|ed|v(orced)?)|o(ng|wnarrow|llar(oldstyle)?)|egree|agger(dbl)?|blhyphen(char)?)|uparrow|p(ilcrow|e(so|r(t(housand|enthousand)|iodcentered))|aragraph|m)|e(stimated|ightoldstyle|uro)|quotes(traight(dblbase|base)|ingle)|f(iveoldstyle|ouroldstyle|lorin|ractionsolidus)|won|l(not|ira|e(ftarrow|af)|quill|angle|brackdbl)|a(s(cii(caron|dieresis|acute|grave|macron|breve)|teriskcentered)|cutedbl)|r(ightarrow|e(cipe|ferencemark|gistered)|quill|angle|brackdbl)|g(uarani|ravedbl)|m(ho|inus|u(sicalnote)?|arried)|b(igcircle|orn|ullet|lank|a(ht|rdbl)|rokenbar)))\\b",
		name: "constant.character.latex"
	},
	{
		captures: {
			"1": {
				name: "punctuation.definition.column-specials.begin.latex"
			},
			"2": {
				name: "punctuation.definition.column-specials.end.latex"
			}
		},
		match: "(?:<|>)(\\{)\\$(\\})",
		name: "meta.column-specials.latex"
	},
	{
		include: "text.tex"
	}
];
const repository = {
	"optional-arg": {
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.optional.arguments.begin.latex"
					},
					"2": {
						name: "variable.parameter.function.latex"
					},
					"3": {
						name: "punctuation.definition.optional.arguments.end.latex"
					}
				},
				match: "(\\[)([^\\[]*?)(\\])",
				name: "meta.parameter.optional.latex"
			}
		]
	},
	"autocites-arg": {
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.arguments.optional.begin.latex"
					},
					"2": {
						name: "punctuation.definition.arguments.optional.end.latex"
					},
					"3": {
						name: "punctuation.definition.arguments.optional.begin.latex"
					},
					"4": {
						name: "punctuation.definition.arguments.optional.end.latex"
					},
					"5": {
						name: "punctuation.definition.arguments.begin.latex"
					},
					"6": {
						name: "constant.other.reference.citation.latex"
					},
					"7": {
						name: "punctuation.definition.arguments.end.latex"
					},
					"8": {
						patterns: [
							{
								include: "#autocites-arg"
							}
						]
					}
				},
				match: "(?:(\\()[^\\)]*(\\))){0,2}(?:(\\[)[^\\]]*(\\])){0,2}(\\{)([\\w:.]+)(\\})(.*)"
			}
		]
	},
	"begin-env-tokenizer": {
		captures: {
			"1": {
				name: "support.function.be.latex"
			},
			"2": {
				name: "punctuation.definition.function.latex"
			},
			"3": {
				name: "punctuation.definition.arguments.begin.latex"
			},
			"4": {
				name: "variable.parameter.function.latex"
			},
			"5": {
				name: "punctuation.definition.arguments.end.latex"
			},
			"6": {
				name: "punctuation.definition.arguments.optional.begin.latex"
			},
			"7": {
				patterns: [
					{
						include: "$base"
					}
				]
			},
			"8": {
				name: "punctuation.definition.arguments.optional.end.latex"
			},
			"9": {
				name: "punctuation.definition.arguments.begin.latex"
			},
			"10": {
				name: "variable.parameter.function.latex"
			},
			"11": {
				name: "punctuation.definition.arguments.end.latex"
			}
		},
		match: "\\s*((\\\\)(?:begin|end))(\\{)([a-zA-Z]*\\*?)(\\})(?:(\\[)(.*)(\\]))?(?:(\\{)([^{}]*)(\\}))?"
	},
	"definition-label": {
		begin: "((\\\\)label)((?:\\[[^\\[]*?\\])*)(\\{)",
		beginCaptures: {
			"1": {
				name: "keyword.control.label.latex"
			},
			"2": {
				name: "punctuation.definition.keyword.latex"
			},
			"3": {
				patterns: [
					{
						include: "#optional-arg"
					}
				]
			},
			"4": {
				name: "punctuation.definition.arguments.begin.latex"
			}
		},
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.arguments.end.latex"
			}
		},
		name: "meta.definition.label.latex",
		patterns: [
			{
				match: "[a-zA-Z0-9\\.,:/*!^_-]",
				name: "variable.parameter.definition.label.latex"
			}
		]
	}
};
const latex_tmLanguage = {
	information_for_contributors: information_for_contributors,
	version: version,
	name: name,
	scopeName: scopeName,
	patterns: patterns,
	repository: repository
};

export { latex_tmLanguage as default, information_for_contributors, name, patterns, repository, scopeName, version };
