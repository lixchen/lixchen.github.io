﻿#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.


;上下左右
	CapsLock & j::Send {left}
	CapsLock & k::Send {down}
	CapsLock & l::Send {right}
	CapsLock & i::Send {up}
	!l::Send ^{right}
	!j::Send ^{left}
;中文标点
	CapsLock & ':: Send ：
	CapsLock & \:: Send 、
	CapsLock & .:: Send 。
	CapsLock & ,:: Send ，
	CapsLock & 9:: Send （）{left}
;选择器
	::getbi::getElementById('');{left 3}
	::getbc::getElementsByClassName('');{left 3}
	::getbt::getElementsByTagName('');{left 3}
	::ques::querySelector('');{left 3}
	::quesa::querySelectorAll('');{left 3}
;定时器
	::sett::setTimeout(, 1000);{left 8}
	::seti::setInterval(, 1000);{left 8}
	::clei::clearInterval();{left 2}
	::clet::clearTimeout();{left 2}
;Dom
	::cree::document.createElement('');{left 3}
	::appc::appendChild();{left 2}
;Event
	::adde::addEventListener('',, false);{left 11}
;类型检测
	::objc::Object.prototype.toString.call('');{left 3}
;normal
	::jav::JavaScript
	::nodejs::Node.js
	::jsc::javascript
;html
::begin::<{!}DOCTYPE html>{enter}<html lang="en">{enter}<head>{enter}<meta charset="UTF-8">{enter}<meta name="viewport" content="width=device-width, initial-scale=1.0">{enter}<meta http-equiv="X-UA-Compatible" content="ie=edge">{enter}<title>test</title>{enter}</head>{enter}<body>{enter 2}</body>{enter}</html>{up 2}



;sublime
CapsLock & s:: Run "D:\编辑器IDE\Sublime Text 3\sublime_text.exe"
;vscode
CapsLock & v:: Run "D:\编辑器IDE\Microsoft VS Code\Code.exe"
;chrome
CapsLock & g::
IfWinExist ahk_exe chrome.exe
{
    WinActivate
    WinMaximize
    return
}
else
{
    Run chrome
    return
}
;PDF
CapsLock & p::Run D:\日常软件\SumatraPDF\SumatraPDF.exe
;CMD
CapsLock & r::Run cmd
CapsLock & c::Run cmd2
;系统服务
CapsLock & f::Run services.msc
;leanote
CapsLock & n::Run D:\note\LeanoteDesk\Leanote.exe
;文件夹内cmd
!r::Send +{RButton}w{enter}
!c::Send !fma

;资源管理器
CapsLock & e::
ifWinExist ahk_class CabinetWClass
{
    WinActivate
    WinMaximize
    return
}
else
{
   Send #e 
   return
}

;leanote 服务器
!n::
{
Run cmd
WinWaitActive C:\WINDOWS\SYSTEM32\cmd.exe
Sleep 300
SendInput cd D:\note\leanote\bin{enter}
Sleep 300
SendInput d:{enter}
Sleep 300
SendInput run.bat{enter}
}
;brower-sync 同步刷新
CapsLock & b::
{
Send +{RButton}w{enter}
Sleep 300
Send browser-sync start --server --files "css/*.css, *.html"{enter}
return
}

;创建文件 输入法需要默认为英文
CreateFile(lxc) 
{
Send !r
Sleep 400
Send %lxc%{enter}!{F4}
return
}
CapsLock & 1:: CreateFile("type nul>index.html")
CapsLock & 2:: CreateFile("type nul>main.css")
CapsLock & 3:: CreateFile("type nul>main.js")





