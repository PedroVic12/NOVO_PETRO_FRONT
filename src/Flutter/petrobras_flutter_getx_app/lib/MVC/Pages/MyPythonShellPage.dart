import 'package:flutter/material.dart';
import 'package:petrobras_flutter_getx_app/MVC/Models/PythonApi.dart';

class MyPythonShellScreen extends StatefulWidget {
  @override
  _MyPythonShellScreenState createState() => _MyPythonShellScreenState();
}

class _MyPythonShellScreenState extends State<MyPythonShellScreen> {
  final PythonAPI _api = PythonAPI();
  String _output = '';

  @override
  void initState() {
    super.initState();
    _api.initialize();
  }

  void _runHelloWorld() async {
    var result = await _api.runCodeString('print("Olá, Mundo!")');
    setState(() {
      _output = result ?? ''; // Se result for null, use uma string vazia.
    });
  }

  void _runPythonVersion() async {
    var result = await _api.runCodeString('import sys; print(sys.version)');
    setState(() {
      _output = result ?? ''; // Se result for null, use uma string vazia.
    });
  }

  void _runSumNumbers() async {
    var result = await _api.runCodeString('print(5 + 7)');
    setState(() {
      _output = result ?? ''; // Se result for null, use uma string vazia.
    });
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
