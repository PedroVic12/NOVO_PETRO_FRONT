import 'package:flutter/material.dart';
import 'package:python_shell/python_shell.dart';


class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String output = '';

  void runPythonCode() async {
    final res = await PythonShell.runScriptAsString(
      'path_to_your_python_script.py',
      pythonPath: 'path_to_your_python_executable',  // exemplo: /usr/bin/python3 (pode ser opcional dependendo da configuração do sistema)
    );

    setState(() {
      output = res;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Python e Flutter'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              onPressed: runPythonCode,
              child: Text('Executar Código Python'),
            ),
            SizedBox(height: 20),
            Text('Saída: $output'),
          ],
        ),
      ),
    );
  }
}
