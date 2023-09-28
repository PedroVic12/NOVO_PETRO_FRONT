import 'package:flutter/material.dart';
import 'package:python_shell/python_shell.dart';


class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final _shell = PythonShell(PythonShellConfig());

  String _output = '';

  @override
  void initState() {
    super.initState();
    _initializeShell();
  }

  Future<void> _initializeShell() async {
    await _shell.initialize();
  }

  Future<void> _runHelloWorld() async {
    var instance = ShellManager.getInstance("default");
    await instance.runString('print("Olá, Mundo!")', echo: true);
  }

  Future<void> _runPythonVersion() async {
    var instance = ShellManager.getInstance("default");
    await instance.runString('import sys; print(sys.version)', echo: true);
  }

  Future<void> _runSumNumbers() async {
    var instance = ShellManager.getInstance("default");
    await instance.runString('print(5 + 7)', echo: true);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Python Shell Exemplos'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              onPressed: _runHelloWorld,
              child: Text('Python: Olá, Mundo!'),
            ),
            ElevatedButton(
              onPressed: _runPythonVersion,
              child: Text('Versão do Python'),
            ),
            ElevatedButton(
              onPressed: _runSumNumbers,
              child: Text('Somar 5 + 7'),
            ),
            SizedBox(height: 20),
            Text('Saída: $_output'),
          ],
        ),
      ),
    );
  }
}
