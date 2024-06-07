# Presenter

## 一言で説明
UseCaseの出力を整形し、Interfaceに渡す。
OutputPortの実装。

## 概要
UseCaseから呼ばれます。
データを表示用の形式に変換し、ユーザーに適切に提示されるようにする。
具体の外界に依存してしまうが、OutputPortはほとんどAPIのレスポンスを実装する形になる。
あえて外界に渡す用のDTOをUseCaseにおいてもいいが、ほとんどAPIのレスポンスを同じ形になるので必要はないと思う。
綺麗にやりたいのであればDTOを作って返す。

## APIにおける簡単な流れ
1. Repositoryから返ってきた値をOutputPortの形式になるように変換
