//------------- tree.js -------------//
var Treeview = function () {

    return {

        exampleTreeview : function () {
            var defaultData = [
                {
                    text: 'Parent 1',
                    href: '#parent1',
                    tags: ['4'],
                    nodes: [
                      {
                        text: 'Child 1',
                        href: '#child1',
                        tags: ['2'],
                        nodes: [
                          {
                            text: 'Grandchild 1',
                            href: '#grandchild1',
                            tags: ['0']
                          },
                          {
                            text: 'Grandchild 2',
                            href: '#grandchild2',
                            tags: ['0']
                          }
                        ]
                      },
                      {
                        text: 'Child 2',
                        href: '#child2',
                        tags: ['0']
                      }
                    ]
                },
                {
                    text: 'Parent 2',
                    href: '#parent2',
                    tags: ['0']
                },
                {
                    text: 'Parent 3',
                    href: '#parent3',
                    tags: ['0']
                },
                {
                    text: 'Parent 4',
                    href: '#parent4',
                    tags: ['0']
                },
                {
                    text: 'Parent 5',
                    href: '#parent5'  ,
                    tags: ['0']
                }
            ];

            var alternateData = [
                {
                    text: 'Parent 1',
                    tags: ['2'],
                    nodes: [
                        {
                            text: 'Child 1',
                            tags: ['3'],
                            nodes: [
                            {
                            text: 'Grandchild 1',
                            tags: ['6']
                            },
                        {
                            text: 'Grandchild 2',
                            tags: ['3']
                        }
                    ]
                    },
                    {
                        text: 'Child 2',
                        tags: ['3']
                    }
                ]
              },
              {
                text: 'Parent 2',
                tags: ['7']
              },
              {
                text: 'Parent 3',
                icon: 'glyphicon glyphicon-earphone',
                href: '#demo',
                tags: ['11']
              },
              {
                text: 'Parent 4',
                icon: 'glyphicon glyphicon-cloud-download',
                href: '/demo.html',
                tags: ['19'],
                selected: true
              },
              {
                text: 'Parent 5',
                icon: 'glyphicon glyphicon-certificate',
                color: 'pink',
                backColor: 'red',
                href: 'http://www.tesco.com',
                tags: ['available','0']
              }
            ];

            var json = '[' +
              '{' +
                '"text": "Parent 1",' +
                '"nodes": [' +
                  '{' +
                    '"text": "Child 1",' +
                    '"nodes": [' +
                      '{' +
                        '"text": "Grandchild 1"' +
                      '},' +
                      '{' +
                        '"text": "Grandchild 2"' +
                      '}' +
                    ']' +
                  '},' +
                  '{' +
                    '"text": "Child 2"' +
                  '}' +
                ']' +
              '},' +
              '{' +
                '"text": "Parent 2"' +
              '},' +
              '{' +
                '"text": "Parent 3"' +
              '},' +
              '{' +
                '"text": "Parent 4"' +
              '},' +
              '{' +
                '"text": "Parent 5"' +
              '}' +
            ']';

            //default tree
            $('#treeview1').treeview({
                data: defaultData
            });

            //collapsed tree
            $('#treeview2').treeview({
                levels: 1,
                data: defaultData
            });

            //Expanded tree
            $('#treeview3').treeview({
                levels: 99,
                data: defaultData
            });

            //custom icons
            $('#treeview5').treeview({
                color: "#428bca",
                expandIcon: 'glyphicon glyphicon-chevron-right',
                collapseIcon: 'glyphicon glyphicon-chevron-down',
                nodeIcon: 'glyphicon glyphicon-bookmark',
                data: defaultData
            });

            //Tags as badges
            $('#treeview6').treeview({
                expandIcon: "glyphicon glyphicon-unchecked",
                collapseIcon: "glyphicon glyphicon-check",
                nodeIcon: "glyphicon glyphicon-user",
                showTags: true,
                data: defaultData
            });

            //Without border 
            $('#treeview7').treeview({
                showBorder: false,
                data: defaultData
            });

            //node overrides
            $('#treeview9').treeview({
                expandIcon: "glyphicon glyphicon-unchecked",
                collapseIcon: "glyphicon glyphicon-check",
                nodeIcon: "glyphicon glyphicon-user",
                showBorder: false,
                showTags: true,
                highlightSelected: true,
                data: alternateData
            });

            //link enabled
            $('#treeview10').treeview({
                enableLinks: true,
                data: defaultData
            });


            //Searchable tree
            var searchableTree = $('#treeview-searchable').treeview({
              data: defaultData,
            });

            $('#input-select-node').on('keyup', function(e) {
                var pattern = $(e.target).val();

                var results = searchableTree.treeview('search', [pattern, {
                    'ignoreCase': true,
                    'exactMatch': false
                }]);
            });          

            //json tree
            var $tree = $('#treeview12').treeview({
              data: json
            });

            // Expandible tree
            var $expandibleTree = $('#treeview-expand').treeview({
                data: defaultData,
            });

            $('#btn-expand-all').on('click', function(e) {
              $expandibleTree.treeview('expandAll', {
                levels: '99'
              });
            });

            $('#btn-collapse-all').on('click', function(e) {
              $expandibleTree.treeview('collapseAll');
            });

        }
        
    }

}();

$(document).ready(function() {    
    Treeview.exampleTreeview(); //activate example tree view
}); 