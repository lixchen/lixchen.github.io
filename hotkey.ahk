#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
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
;selector
	::getbi::getElementById('');{left 3}
	::getbc::getElementsByClassName('');{left 3}
	::getbt::getElementsByTagName('');{left 3}
	::ques::querySelector('');{left 3}
	::quesa::querySelectorAll(''){left 3}
;timer
	::sett::setTimeout(, 1000);{left 8}
	::seti::setInterval(, 1000);{left 8}
	::clei::clearInterval();{left 2}
	::clet::clearTimeout();{left 2}
;Dom
	::cree::document.createElement('');{left 3}
	::appc::appendChild();{left 2}
;Event
	::adde::addEventListener('',, false);{left 11}
;typecheck
	::objc::Object.prototype.toString.call('');{left 3}
;normal
	::jav::JavaScript
	::nodejs::Node.js
	::js::javascript
;css
	::bgc::backgroundColor



;sublime
CapsLock & s:: Run "D:\编辑器IDE\Sublime Text 3\sublime_text.exe"
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
;SERVICES
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





;代码片段





