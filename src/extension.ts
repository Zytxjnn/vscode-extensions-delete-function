import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('start');
	
	vscode.commands.registerCommand('vscode-extension-delete-function.helloWorld', () => {
		vscode.window.showInformationMessage('xjnn from vscode-extension-delete-function!');


	});

	// vscode中如何删除字符
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	
	editor.edit(builder => {
		builder.delete(new vscode.Range(new vscode.Position(0,0),new vscode.Position(3,0)))
	})
}

export function deactivate() {}
